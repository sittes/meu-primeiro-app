import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NavigationScreens from "./screens/NavigationScreens";

const Stack = createNativeStackNavigator();

export default function StackNavigaton() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="NavigationScreens" component={NavigationScreens} />
                <Stack.Screen name="+not-found" component={NotFoundScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}