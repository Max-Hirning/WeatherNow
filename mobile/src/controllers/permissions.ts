import { PermissionsAndroid } from 'react-native';


export const permissionAction = async (): Promise<boolean> => {
    try {
        const permission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if(!permission) {
            const newPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            return newPermission === PermissionsAndroid.RESULTS.GRANTE;
        }
        return permission;
    } catch (error) {
        console.error(error);
    }
    return false
}