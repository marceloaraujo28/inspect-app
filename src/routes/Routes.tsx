import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Camera } from "../pages/Galeria/screens/Camera";
import { Description } from "../pages/Galeria/screens/Description";
import { MoreDetails } from "../pages/Galeria/screens/MoreDetails";
import { TabRoutes } from "./TabRoutes";

export type RootStackParamList = {
  TabRoutes: undefined;
  Home: undefined;
  Galeria: undefined;
  Photos?: {
    id?: string | number[];
    title?: string;
    description?: string;
    uri?: string;
  };
  Camera: undefined;
  Description: { uriImage: string };
  MoreDetails: { title?: string; src?: string; description?: string };
};

const Tab = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Tab.Navigator initialRouteName="TabRoutes">
      <Tab.Screen
        name="TabRoutes"
        options={{
          headerShown: false,
        }}
        component={TabRoutes}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Description"
        component={Description}
        options={{
          title: "Adicionar informações",
          headerTitleStyle: {
            color: "#fff",
          },
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1C1C1C",
          },
          headerLeft: Description.HeaderLeft,
        }}
      />
      <Tab.Screen
        name="MoreDetails"
        component={MoreDetails}
        options={{
          headerShown: false,
          headerTransparent: true,
          presentation: "transparentModal",
        }}
      />
    </Tab.Navigator>
  );
}
