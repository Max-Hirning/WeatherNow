import { dayNames, monthNames } from "../model/date";

export function getDate(): string {
    const today: any = new Date();
    const month = today.getMonth();
    const dayOfWeek = today.getDay();
    const dayOfMonth = today.getDate();
    return `${dayNames[dayOfWeek]}, ${dayOfMonth} ${monthNames[month]}`;
}