import * as Moment from "moment";
import * as React from "react";
import ITimetable from "../../models/ITimetable";
import ITimetableEvent from "../../models/ITimetableEvent";
import ITimetableFilters from "../../models/ITimetableFilters";
import LecturersPages from "../LecturersPages";
import Timetable from "../Timetable";
import * as config from "react-global-configuration";
import FileManager from "../FileManager";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            FileManager.setupFiles(false, (exist, value) => {
                console.log("doniczkav2.0 " + exist + "WYNIK: " + value);
            });
        }
    }

    public render(): JSX.Element {

        const data: ITimetable = {
            date: "2017-12-30T12:00:00",
            events: [
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,
                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Wstęp do programowania",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("8:45", "HH:mm"),
                    endTime: Moment.utc("10:15", "HH:mm"),
                    room: "Aula IV",
                    lecturer: "Maciej Pankiewicz",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,
                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Podstawy fizyki",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("10:30", "HH:mm"),
                    endTime: Moment.utc("12:00", "HH:mm"),
                    room: "Aula IV",
                    lecturer: "Andrzej Zembrzuski",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,
                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Matematyka dyskretna",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("14:0", "HH:mm"),
                    endTime: Moment.utc("15:30", "HH:mm"),
                    room: "Aula IV",
                    lecturer: "Arkadiusz Orłowski",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Podstawy fizyki",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("15:30", "HH:mm"),
                    endTime: Moment.utc("17:00", "HH:mm"),
                    room: "3/83",
                    lecturer: "Andrzej Zembrzuski",
                    type: "ćwiczenia",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,
                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Matematyka dyskretna",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("17:15", "HH:mm"),
                    endTime: Moment.utc("18:45", "HH:mm"),
                    room: "3/40",
                    lecturer: "Arkadiusz Orłowski",
                    type: "ćwiczenia",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Ergonomia i BHP",
                    dayOfWeek: "ŚR",
                    startTime: Moment.utc("9:00", "HH:mm"),
                    endTime: Moment.utc("9:45", "HH:mm"),
                    room: "Aula IV",
                    lecturer: "Jakub Pach",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Podstawy analizy matematycznej",
                    dayOfWeek: "ŚR",
                    startTime: Moment.utc("10:0", "HH:mm"),
                    endTime: Moment.utc("11:30", "HH:mm"),
                    room: "Aula IV",
                    lecturer: "Alina Jóźwikowska",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Wstęp do programowania",
                    dayOfWeek: "ŚR",
                    startTime: Moment.utc("11:45", "HH:mm"),
                    endTime: Moment.utc("13:15", "HH:mm"),
                    room: "3/11",
                    lecturer: "Marcin Bator",
                    type: "laboratorium",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Podstawy analizy matematycznej",
                    dayOfWeek: "ŚR",
                    startTime: Moment.utc("13:30", "HH:mm"),
                    endTime: Moment.utc("15:00", "HH:mm"),
                    room: "3/40",
                    lecturer: "Alina Jóźwikowska",
                    type: "ćwiczenia",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Podstawy ekonomii",
                    dayOfWeek: "CZW",
                    startTime: Moment.utc("9:15", "HH:mm"),
                    endTime: Moment.utc("10:45", "HH:mm"),
                    room: "3/82",
                    lecturer: "Sebastian Jarzębowski",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Podstawy matematyki wyższej",
                    dayOfWeek: "PT",
                    startTime: Moment.utc("10:15", "HH:mm"),
                    endTime: Moment.utc("11:45", "HH:mm"),
                    room: "3/19 b.37",
                    lecturer: "Piotr Stachura",
                    type: "ćwiczenia",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 1,
                    semester: 1,

                    group: 3,
                    facultyGroup: "",
                    specialization: "",
                    degree: "inż",
                    name: "Podstawy matematyki wyższej",
                    dayOfWeek: "PT",
                    startTime: Moment.utc("12:15", "HH:mm"),
                    endTime: Moment.utc("13:45", "HH:mm"),
                    room: "Aula IV",
                    lecturer: "Piotr Stachura",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Bezpieczeństwo systemów komputerowych",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("8:30", "HH:mm"),
                    endTime: Moment.utc("9:45", "HH:mm"),
                    room: "3/11",
                    lecturer: "Imed El Fray ",
                    type: "wykład",
                    remarks: "Zajęcia przez 9 tygodni w semestrze",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Bezpieczeństwo systemów komputerowych",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("10:15", "HH:mm"),
                    endTime: Moment.utc("11:45", "HH:mm"),
                    room: "3/11",
                    lecturer: "Imed El Fray ",
                    type: "laboratorium",
                    remarks: "Zajęcia przez 9 tygodni w semestrze",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Komunikacja międzykulturowa",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("12:15", "HH:mm"),
                    endTime: Moment.utc("13:45", "HH:mm"),
                    room: "Aula IV",
                    lecturer: "Anna Wachowiak",
                    type: "wykład",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Sztuczna Inteligencja",
                    dayOfWeek: "PN",
                    startTime: Moment.utc("16:0", "HH:mm"),
                    endTime: Moment.utc("17:30", "HH:mm"),
                    room: "3/31",
                    lecturer: "Ryszard Kozera",
                    type: "laboratorium",
                    remarks: "Zajęcia przez 8 tygodni w semestrze i ostatnie zajęcia 45 minut",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Seminarium dyplomowe",
                    dayOfWeek: "WT",
                    startTime: Moment.utc("10:45", "HH:mm"),
                    endTime: Moment.utc("12:15", "HH:mm"),
                    room: "3/85",
                    lecturer: "Jacek Zygmut Zawistowski",
                    type: "",
                    remarks: "",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Systemy mobilne i komunikacja bezprzewodowa",
                    dayOfWeek: "WT",
                    startTime: Moment.utc("12:30", "HH:mm"),
                    endTime: Moment.utc("14:30", "HH:mm"),
                    room: "3/85",
                    lecturer: "Jacek Zygmut Zawistowski",
                    type: "wykład",
                    remarks: "Zajecia przez 12 tygodni w semestrze",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Systemy mobilne i komunikacja bezprzewodowa",
                    dayOfWeek: "WT",
                    startTime: Moment.utc("14:45", "HH:mm"),
                    endTime: Moment.utc("15:45", "HH:mm"),
                    room: "3/85",
                    lecturer: "Jarosław Kurek",
                    type: "laboratorium",
                    remarks: "Zajęcia przez 12 tygodni w semestrze",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Wprowadzenie do modeli Deep-Learning",
                    dayOfWeek: "ŚR",
                    startTime: Moment.utc("8:15", "HH:mm"),
                    endTime: Moment.utc("10:30", "HH:mm"),
                    room: "3/11",
                    lecturer: "Bartosz Swiderski",
                    type: "wykład",
                    remarks: "Zajęcia przez 10 tygodni w semestrze",
                    isFaculty: true, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Odporne metody analizy obrazów",
                    dayOfWeek: "ŚR",
                    startTime: Moment.utc("8:15", "HH:mm"),
                    endTime: Moment.utc("10:45", "HH:mm"),
                    room: "3/8",
                    lecturer: "Leszek Chmielewski ",
                    type: "laboratorium",
                    remarks: "Zajęcia przez 9 tygodni w semestrze",
                    isFaculty: true, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Podstawy fotografii cyfrowej",
                    dayOfWeek: "ŚR",
                    startTime: Moment.utc("14:0", "HH:mm"),
                    endTime: Moment.utc("16:15", "HH:mm"),
                    room: "3/27",
                    lecturer: "Michał Kruk",
                    type: "laboratorium",
                    remarks: "Zajęcia przez 10 tygodni w semestrze",
                    isFaculty: true, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Sztuczna Inteligencja",
                    dayOfWeek: "PT",
                    startTime: Moment.utc("8:15", "HH:mm"),
                    endTime: Moment.utc("9:45", "HH:mm"),
                    room: "3/40",
                    lecturer: "Ryszard Kozera",
                    type: "wykład",
                    remarks: "Zajęcia przez 7 tygodni w semestrze",
                    isFaculty: false, academicYear: "2017/2018",
                },
                {
                    department: "WZIM",
                    fieldOfStudy: "Informatyka",
                    mode: "Stacjonarne",
                    year: 4,
                    semester: 7,

                    group: 2,
                    facultyGroup: "",
                    specialization: "ISK",
                    degree: "inż",
                    name: "Sztuczna Inteligencja",
                    dayOfWeek: "PT",
                    startTime: Moment.utc("10:00", "HH:mm"),
                    endTime: Moment.utc("11:30", "HH:mm"),
                    room: "3/40",
                    lecturer: "Ryszard Kozera",
                    type: "wykład",
                    remarks: "Zajęcia przez 8 tygodni w semestrze",
                    isFaculty: false, academicYear: "2017/2018",
                },
            ],
        };

        const temp = config.get();
        temp.timetable = data;
        config.set(temp);

        // const filters: ITimetableFilters = {
        //     fieldOfStudy: "Informatyka",
        //     degree: "inż",
        //     mode: "Stacjonarne",
        //     semester: 1,
        //     department: "WZIM",
        // };
        const filters = config.get("filters");

        return (
            <div className="main-page-container" style={{ marginTop: "69px" }}>
                <Timetable
                    data={data}
                    filters={filters}
                    defaultDay={this.currentDay(filters)}
                    // defaultGroup="3"
                    onEventBlockClick={(event) => this.handleEventBlockClick(event)}
                />
            </div>
        );
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
