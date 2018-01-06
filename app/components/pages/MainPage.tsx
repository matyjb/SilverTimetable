import * as Moment from "moment";
import * as React from "react";
import ITimetable from "../../models/ITimetable";
import ITimetableEvent from "../../models/ITimetableEvent";
import ITimetableFilters from "../../models/ITimetableFilters";
import CircularProgress from "../CircularProgress";
import LecturersPages from "../LecturersPages";
import ErrorPage from "../Pages/ErrorPage";
import Timetable from "../Timetable";
import * as config from "react-global-configuration";
import TimetableServices from "../TimetableServices";
import FileManager from "../FileManager";
import configuration from "../../DefaultConfiguration";
import IConfiguration from "../../models/IConfiguration";
import DefaultConfiguration from "../../DefaultConfiguration";

interface IProps {
    data: ITimetable;
}

interface IState {
    timetableData: ITimetable;
    IsLoaded: boolean;
    IsError: boolean;
}
export default class MainPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const onDeviceReady = () => {
            TimetableServices.initialize().then(() => this.Initialize().then((result) => this.setState(result)));
        };
        document.addEventListener("deviceready", onDeviceReady, false);
        this.state = {
            timetableData: this.props.data,
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

        if (TimetableServices.isNetworkAvailable()) {
            console.log("jest internet");
            if (TimetableServices.isNewerTimetable()) {
                console.log("jest nowszy plan, ściągam");
                result.timetableData = await TimetableServices.getTimetable();
                await TimetableServices.writeTimetableFile(result.timetableData);
            }

        } else {
            console.log("nie ma internetu lub plan jest aktualny");
            const timetableData = await TimetableServices.readTimetableFile();
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
            configurationData = { ...DefaultConfiguration };
            await TimetableServices.writeConfigurationFile(configuration);
        } else {
            console.log("jest konfiguracja w pamięci");
        }

        config.set({ ...configurationData, timetable: result.timetableData });

        result.IsLoaded = true;

        return result;
    }

    public render(): JSX.Element {

        const data: ITimetable = this.state.timetableData;

        const filters = config.get("filters");

        if (!this.state.IsLoaded && !this.state.IsError) {
            return (<CircularProgress />);
        } else if (this.state.IsError) {
            return (<ErrorPage />);
        } else {
            return (
                <div className="main-page-container" style={{ marginTop: "69px" }}>
                    {this.state.timetableData &&
                        <Timetable
                            data={data}
                            filters={filters}
                            defaultDay={this.currentDay(filters)}
                            onEventBlockClick={(event) => this.handleEventBlockClick(event)}
                        />
                    }
                </div>
            );
        }
    }

    private handleEventBlockClick = (event: ITimetableEvent): void => {
        LecturersPages.openLecturersPage(event);
    }

    private currentDay(filters: ITimetableFilters): number {
        const today: Date = new Date();
        let dayNumber: number = today.getDay();
        const mode = filters.mode;

        switch (mode) {
            case "Stacjonarne":
                if (dayNumber === 0 || dayNumber === 6) {
                    dayNumber = 1;
                }
                dayNumber = dayNumber - 1;
                break;

            case "Niestacjonarne":
                if (dayNumber >= 1 && dayNumber <= 5) {
                    dayNumber = 0;
                } else if (dayNumber === 6) {
                    dayNumber = 1;
                } else if (dayNumber === 0) {
                    dayNumber = 2;
                }
                break;
        }

        return dayNumber;
    }
}
