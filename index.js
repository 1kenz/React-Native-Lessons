import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import Router from "./__lesson__/session15/src/Router";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Router);
