import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Photos } from "./screens/Photos";

export type RootStackParamList = {
  Photos: undefined;
  Camera: undefined;
  Description: { uriImage: string };
};

const Tab = createNativeStackNavigator<RootStackParamList>();

export function Galeria() {
  return (
    <Tab.Navigator initialRouteName="Photos">
      <Tab.Screen
        name="Photos"
        options={{
          title: "Fotos",
          headerTitleStyle: {
            color: "#fff",
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1C1C1C",
          },
        }}
        component={Photos}
      />
    </Tab.Navigator>
  );
}
