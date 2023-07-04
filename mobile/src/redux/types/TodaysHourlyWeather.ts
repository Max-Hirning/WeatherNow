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
    weatherCode: number;
    temperatureAvg: number;
}