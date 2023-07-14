import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveInAsyncStorage = async (key: string, value: string): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
}