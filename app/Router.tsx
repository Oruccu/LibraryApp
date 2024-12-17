import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Settings from "./pages/Settings";
import LogIn from "./pages/Auth/LogIn";
import Register from "./pages/Auth/Register";
import Context from "./pages/Auth/Context";
import { auth } from "@/firebaseConfig";
import colors from "./styles/Color";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 70,
          paddingTop: 10, 
          paddingBottom: 0, 
          marginBottom:20,
          borderRadius: 50,
          position: "absolute",
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4, // Adjust spacing for labels
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="book"
              color={focused ? colors.green : colors.gray}
              size={23}
            />
          ),
        }}
      />
      <Tab.Screen 
      name="Favorite" 
      component={Favorite} 
      options={{
        tabBarLabel: "Favorite",
        tabBarIcon: ({ focused }) => (
          <FontAwesome
            name="heart-o"
            color={focused ? colors.green : colors.gray}
            size={23}
          />
        ),
      }}/>
      <Tab.Screen 
      name="Settings" 
      component={Settings} 
      options={{
        tabBarLabel: "Settings",
        tabBarIcon: ({ focused }) => (
          <AntDesign
            name="setting"
            color={focused ? colors.green : colors.gray}
            size={23}
          />
        ),
      }}/>
    </Tab.Navigator>
  );
}

function AuthStack() {
  const handleLogout = () => {
    console.log("test");
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Context" component={Context} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function App() {
  const [userSession, setUserSession] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserSession(!!user);
      } else {
        setUserSession(false);
      }
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!userSession ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen name="Root" component={Root} />
      )}
    </Stack.Navigator>
  );
}

export default App;
