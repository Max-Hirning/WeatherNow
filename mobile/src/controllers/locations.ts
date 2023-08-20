import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import Geolocation from 'react-native-geolocation-service';
import { MessagesTypes } from "../constants/messagesTypes";
import { flashMessage } from "../controllers/flashMessage";
import { permissionAction } from "../controllers/permissions";
import { setForecastWeatherAsync } from "../redux/reducers/forecastWeather";
import { FlashMessageBackgroundColors, FlashMessageColors } from "../constants/themes";

export function useGetCurrentLocation() {
	const dispatch: AppDispatch = useDispatch();

	const getLocationAndForecast = async (): Promise<void> => {
		try {
				const permission = await permissionAction();
				if(permission) {
						Geolocation.getCurrentPosition(
								(position) => {
										dispatch(setForecastWeatherAsync(`${position.coords.latitude},${position.coords.longitude}`));
								},
								() => {
										flashMessage("Smth went wrong", "Pls contact us: location error", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
								},
								{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
						)
				} else {
						dispatch(setForecastWeatherAsync("Paris"));
				}
		} catch {
				flashMessage("Smth went wrong", "Pls contact us", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
		}
	}

	return getLocationAndForecast;
}