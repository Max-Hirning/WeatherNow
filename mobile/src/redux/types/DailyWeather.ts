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
    weatherCode: number;
    temperatureMin: number;
    temperatureMax: number;
}