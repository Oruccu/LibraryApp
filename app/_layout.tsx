import { NavigationIndependentTree } from "@react-navigation/native";
import App from "./Router";

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <App />
    </NavigationIndependentTree>
  );
}
