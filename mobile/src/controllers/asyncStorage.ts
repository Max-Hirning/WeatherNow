import { flashMessage } from "./flashMessage";
import { MessagesTypes } from "../constants/messagesTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlashMessageBackgroundColors, FlashMessageColors } from "../constants/themes";

export const saveInAsyncStorage = async (key: string, value: string): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        flashMessage("Smth went wrong", "Pls contact us", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
    }
}