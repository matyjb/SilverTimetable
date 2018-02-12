import ITimetable from "../models/ITimetable";
import IConfiguration from "./IConfiguration";

export interface IGlobalState {
    navigationToolbar: {
        leftDrawerOpen: boolean,
    };
    timetable: {
        isLoaded: boolean,
        bottomDrawerOpen: boolean,
        data: ITimetable,
    };
    configuration: IConfiguration;
}
