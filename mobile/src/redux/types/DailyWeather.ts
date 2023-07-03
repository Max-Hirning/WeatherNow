export interface Timeline {
    endTime: string;
    timestep: string;
    startTime: string;
    intervals: Interval[];
}

export interface Interval {
    startTime: string;
    values: IntervalValues;
}

export interface IntervalValues {
    windGust: number;
    cloudBase: number;
    windSpeed: number;
    cloudCover: number;
    weatherCode: number;
    temperature: number;
    cloudCeiling: number;
    windDirection: number;
    precipitationType: number;
    temperatureApparent: number;
    precipitationIntensity: number;
}