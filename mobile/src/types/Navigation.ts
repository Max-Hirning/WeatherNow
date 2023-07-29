import type { StackNavigationProp } from "@react-navigation/stack";
import type { CompositeNavigationProp } from "@react-navigation/native";

type AppParamList = {
    Forecast: undefined;
    FeedBack: undefined;
    FindLocation: undefined;
};

type NavigationParamList = {
    App: undefined;
    StartInfo: undefined;
};

export type ScreenNavigationProp = CompositeNavigationProp<StackNavigationProp<AppParamList, "Forecast">, StackNavigationProp<NavigationParamList, "StartInfo">>;