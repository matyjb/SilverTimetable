import ITimetable from "../models/ITimetable";
import IConfiguration from "./IConfiguration";

export interface IGlobalState {
    navigationToolbar: {
        leftDrawerOpen: boolean,
    };
    timetable: {
        isLoaded: boolean,
        isError: boolean,
        selectedGroup: string,
        bottomDrawerOpen: boolean,
        data: ITimetable,
    };
    configuration: IConfiguration;
}
