export function getHourFromDate(dateString: string): any {
    const date = new Date(dateString);
    const hour = date.getHours();
    const formattedHour = hour < 10 ? `0${hour}` : hour.toString();
    return `${formattedHour}:00`;
}