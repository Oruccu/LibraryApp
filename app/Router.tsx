import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Settings from './pages/Settings'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
