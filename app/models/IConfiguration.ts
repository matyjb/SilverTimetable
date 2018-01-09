import ITimetableFilters from "./ITimetableFilters";
import ITimetable from "./ITimetable";

export default interface IConfiguration {
    filters: ITimetableFilters;
    notifyAboutUpdates: boolean;
    allowQuickGroupChange: boolean;
}