export const checkDateWithToday = (data: string): boolean => {
    const now = new Date();
    const date = new Date(data);
    
    const nowDate = now.toJSON().split("T")[0];
    const dateDate = date.toJSON().split("T")[0];
    
    return (nowDate === dateDate && now.getHours() === date.getHours());
}