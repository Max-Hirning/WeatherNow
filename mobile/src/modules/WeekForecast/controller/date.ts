function isToday(date: Date) {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

export function getDayOfWeek(dateString: string) {
    const date = new Date(dateString);
    const options = { weekday: 'long' as const };

    if (isToday(date)) {
        return 'Today';
    } else {
        return date.toLocaleDateString('en-US', options);
    }
}