import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Galeria } from "../pages/Galeria";
import { Home } from "../pages/Home";
import { AntDesign } from "@expo/vector-icons";

export function TabRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FFD700",
        tabBarStyle: {
          backgroundColor: "#1C1C1C",
          paddingBottom: 3,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? "#FFD700" : "white"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Galeria"
        component={Galeria}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="folder1"
              size={30}
              color={focused ? "#FFD700" : "white"}
            />
          ),
          headerStyle: {
            backgroundColor: "#1C1C1C",
          },
        }}
      />
    </Tab.Navigator>
  );
}
