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
    uvIndexAvg: number;
    dewPointAvg: number;
    humidityAvg: number;
    weatherCode: number;
    windSpeedAvg: number;
    windSpeedMax: number;
    windSpeedMin: number;
    visibilityAvg: number;
    temperatureAvg: number;
    temperatureMax: number;
    temperatureMin: number;
    windDirectionAvg: number;
    temperatureApparentAvg: number;
    precipitationProbabilityAvg: number;
}