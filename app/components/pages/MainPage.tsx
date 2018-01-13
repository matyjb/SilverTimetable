import * as React from "react";
import ITimetable from "../../models/ITimetable";
import ITimetableEvent from "../../models/ITimetableEvent";
import ITimetableFilters from "../../models/ITimetableFilters";
import CircularProgress from "material-ui/Progress/CircularProgress";
import LecturersPages from "../../services/LecturersPages";
import ErrorPage from "../Pages/ErrorPage";
import Timetable from "../timetable/Timetable";
import config from "react-global-configuration";
import TimetableServices from "../../services/TimetableServices";
import defaultConfig from "../../DefaultConfiguration";
import IConfiguration from "../../models/IConfiguration";
import IDateCheck from "../../models/IDateCheck";

interface IState {
    timetableData: ITimetable;
    IsLoaded: boolean;
    IsError: boolean;
}
export default class MainPage extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        const onDeviceReady = () => {
            TimetableServices.initialize().then(() => this.Initialize().then((result) => this.setState(result)));
        };
        document.addEventListener("deviceready", onDeviceReady, false);
        this.state = {
            timetableData: null,
            IsLoaded: false,
            IsError: false,
        };
    }
    public async Initialize(): Promise<IState> {

        const sessionConfigTimetable: ITimetable = config.get("timetable");
        if (sessionConfigTimetable) {
            console.log("config w sesji");
            return {
                timetableData: sessionConfigTimetable,
                IsError: false,
                IsLoaded: true,
            };
        }

        const result: IState = {
            timetableData: null,
            IsError: false,
            IsLoaded: false,
        };

        let configurationData: IConfiguration = await TimetableServices.readConfigurationFile();
        const timetableData: ITimetable = await TimetableServices.readTimetableFile();
        let newerDate: IDateCheck;

        if (TimetableServices.isNetworkAvailable()) {
            console.log("jest internet");
            try {
                newerDate = await TimetableServices.getNewerDate();
            } catch {
                console.log("Nie udało się sprawdzić nowszej wersji");
            }
            if (!timetableData || TimetableServices.isNewerTimetable(timetableData, newerDate)) {
                console.log("jest nowszy plan lub nie ma w pamieci, ściągam");
                try {
                    result.timetableData = await TimetableServices.getTimetable();
                    await TimetableServices.writeTimetableFile(result.timetableData);
                } catch {
                    console.log("Błąd pobierania...");
                    result.IsError = true;
                }
            } else {
                console.log("odczytuję plan z pamięci...");
                result.timetableData = timetableData;
            }
        } else {
            console.log("nie ma internetu lub plan jest aktualny");
            if (timetableData) {
                console.log("jest plan w pamieci, ładuję");
                result.timetableData = timetableData;
            } else {
                console.log("nie ma internetu i planu w pamieci");
                result.IsError = true;
                return result;
            }
        }

        if (!configurationData) {
            console.log("nie ma pliku konfiguracyjnego, tworzę domyslny");
            configurationData = { ...defaultConfig };
            await TimetableServices.writeConfigurationFile(configurationData);
        } else {
            console.log("jest konfiguracja w pamięci");
        }

        config.set({ ...configurationData, timetable: result.timetableData });

        result.IsLoaded = true;

        return result;
    }

    public render(): JSX.Element {

        const data: ITimetable = this.state.timetableData;

        const filters: ITimetableFilters = config.get("filters");

        if (!this.state.IsLoaded && !this.state.IsError) {
            return (
                <div className="CrcProgress">
                    <CircularProgress color="accent" size={60} thickness={7} />
                </div>
            );
        } else if (this.state.IsError) {
            return (<ErrorPage />);
        } else {
            return (
                <div className="main-page-container" style={{ marginTop: "69px" }}>
                    {this.state.timetableData &&
                        <Timetable
                            data={data}
                            filters={filters}
                            defaultDay={this.currentDay(filters.mode)}
                            onEventBlockClick={(event) => this.handleEventBlockClick(event)}
                        />
                    }
                </div>
            );
        }
    }

    public async refresh() {
        console.log("Odświerzam...");
        this.setState({ ...this.state, IsLoaded: false });
        if (TimetableServices.isNetworkAvailable()) {
            let newerDate: IDateCheck;
            try {
                newerDate = await TimetableServices.getNewerDate();
            } catch {
                console.log("Nie udało się sprawdzić nowszej wersji");
            }
            // tslint:disable-next-line:max-line-length
            if (!this.state.timetableData || TimetableServices.isNewerTimetable(this.state.timetableData, newerDate)) {
                console.log("Jest internet i nowsza wersja - pobieram...");
                let timetable: ITimetable;
                try {
                    timetable = await TimetableServices.getTimetable();
                    await TimetableServices.writeTimetableFile(timetable);
                } catch {
                    console.log("Błąd pobierania");
                    timetable = this.state.timetableData;
                }

                this.setState({
                    ...this.state,
                    timetableData: timetable,
                    IsLoaded: true,
                });
            }
        }
        this.setState({ ...this.state, IsLoaded: true });
    }

    private handleEventBlockClick = (event: ITimetableEvent): void => {
        LecturersPages.openLecturersPage(event);
    }

    private currentDay(mode: string): number {
        const today: Date = new Date();
        let dayNumber: number = today.getDay();

        switch (mode) {
            case "Stacjonarne":
                if (dayNumber === 0 || dayNumber === 6) {
                    dayNumber = 1;
                }
                break;

            case "Niestacjonarne":
                if (dayNumber >= 1 && dayNumber <= 4) {
                    dayNumber = 5;
                } else if (dayNumber === 0) {
                    dayNumber = 7;
                }
                break;
        }

        return dayNumber;
    }
}
