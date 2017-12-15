import * as Moment from "moment";
import * as React from "react";
import ITimetable from "../../models/ITimetable";
import ITimetableEvent from "../../models/ITimetableEvent";
import ITimetableFilters from "../../models/ITimetableFilters";
import LecturersPages from "../LecturersPages";
import Timetable from "../Timetable";

export default class MainPage extends React.Component {

    public render(): JSX.Element {

        const data: ITimetable = {
            creationDate: new Date("02.11.2017"),
            fieldsOfStudy: [
                {
                    name: "Informatyka",
                    degrees: [
                        {
                            name: "I - inżynierskie",
                            modes: [
                                {
                                    name: "Stacjonarne",
                                    semesters: [
                                        {
                                            number: 1,
                                            days: [
                                                {
                                                    name: "Poniedzialek",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("10:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Matematyka dyskretna",
                                                            lecturer: "Arkadiusz Orlowski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("14:00", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2"],
                                                            name: "Matematyka dyskretna",
                                                            lecturer: "Arkadiusz Orlowski",
                                                            type: "ćwiczenia",
                                                            room: "3/40",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["3", "4"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "ćwiczenia",
                                                            room: "3/83",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["5", "6"],
                                                            name: "Podstawy analizy matematycznej",
                                                            lecturer: "Jarosław Bojarski",
                                                            type: "ćwiczenia",
                                                            room: "1/78",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Wtorek",
                                                    events: [
                                                        {
                                                            groups: ["3", "4", "ISI1"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "ćwiczenia",
                                                            room: "3/83",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["5", "6"],
                                                            name: "Podstawy analizy matematycznej",
                                                            lecturer: "Jarosław Bojarski",
                                                            type: "ćwiczenia",
                                                            room: "1/78",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Środa",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Matematyka dyskretna",
                                                            lecturer: "Arkadiusz Orlowski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("14:00", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2"],
                                                            name: "Matematyka dyskretna",
                                                            lecturer: "Arkadiusz Orlowski",
                                                            type: "ćwiczenia",
                                                            room: "3/40",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Czwartek",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("10:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Piątek",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("10:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    name: "Niestacjonarne",
                                    semesters: [
                                        {
                                            number: 1,
                                            turnus: "A",
                                            days: [
                                                {
                                                    name: "Piątek",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("10:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["3", "4"],
                                                            name: "Matematyka dyskretna",
                                                            lecturer: "Arkadiusz Orlowski",
                                                            type: "ćwiczenia",
                                                            room: "3/40",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Sobota",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("10:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Niedziela",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("10:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            number: 1,
                                            turnus: "B",
                                            days: [
                                                {
                                                    name: "Piątek",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("10:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Matematyka dyskretna",
                                                            lecturer: "Arkadiusz Orlowski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("14:00", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Sobota",
                                                    events: [
                                                        {
                                                            groups: ["3", "4", "ISI1"],
                                                            name: "Podstawy fizyki",
                                                            lecturer: "Andrzej Zembrzuski",
                                                            type: "ćwiczenia",
                                                            room: "3/83",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                        {
                                                            groups: ["5", "6"],
                                                            name: "Podstawy analizy matematycznej",
                                                            lecturer: "Jarosław Bojarski",
                                                            type: "ćwiczenia",
                                                            room: "1/78",
                                                            startTime: Moment.utc("15:30", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Niedziela",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Matematyka dyskretna",
                                                            lecturer: "Arkadiusz Orlowski",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("14:00", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Informatyka i ekonometria",
                    degrees: [
                        {
                            name: "I - inżynierskie",
                            modes: [
                                {
                                    name: "Stacjonarne",
                                    semesters: [
                                        {
                                            number: 1,
                                            days: [
                                                {
                                                    name: "Poniedziałek",
                                                    events: [
                                                        {
                                                            groups: ["1", "2", "3", "4", "5", "6"],
                                                            name: "Wstęp do programowania",
                                                            lecturer: "Maciej Pankiewicz",
                                                            type: "wykład",
                                                            room: "Aula IV",
                                                            startTime: Moment.utc("8:45", "HH:mm"),
                                                            duration: 90,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        };

        const filters: ITimetableFilters = {
            fieldOfStudy: "Informatyka",
            degree: "I - inżynierskie",
            mode: "Stacjonarne",
            semester: 1,
            // turnus: "B",
        };

        return (
            <div className="main-page-container" style={{marginTop: "69px"}}>
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

    private currentDay(filters) {
        const today: Date = new Date();
        let day: number = today.getDay();
        const mode  = filters.mode;

        switch (mode) {
            case "Stacjonarne":
                if (day === 0 || day === 6) {
                    day = 1;
                }
                day = day - 1;
                break;

            case "Niestacjonarne":
                if (day >= 1 && day <= 5) {
                    day = 0;
                } else if (day === 6) {
                    day = 1;
                } else if (day === 0) {
                    day = 2;
                }
                break;
        }
        return day;
    }
}
