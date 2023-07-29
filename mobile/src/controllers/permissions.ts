import { flashMessage } from './flashMessage';
import { PermissionsAndroid } from 'react-native';
import { MessagesTypes } from '../constants/messagesTypes';
import { FlashMessageBackgroundColors, FlashMessageColors } from '../constants/themes';


export const permissionAction = async (): Promise<boolean> => {
    try {
        const permission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if(!permission) {
            const newPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            return newPermission === PermissionsAndroid.RESULTS.GRANTE;
        }
        return permission;
    } catch (error) {
        flashMessage("Smth went wrong", "Pls contact us", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
    }
    return false
}