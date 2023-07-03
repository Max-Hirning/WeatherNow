export interface Timeline {
    timestep: string;
    endTime: string;
    startTime: string;
    intervals: Interval[];
}

export interface Interval {
    startTime: string;
    values: IntervalValues;
}

export interface IntervalValues {
    cloudBase: number | null;
    cloudCeiling: number | null;
    cloudCover: number;
    precipitationIntensity: number;
    precipitationType: number;
    temperature: number;
    temperatureApparent: number;
    weatherCode: number;
    windDirection: number;
    windGust: number;
    windSpeed: number;
}