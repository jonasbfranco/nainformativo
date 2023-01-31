//  import Home from './src/pages/Home'
import Routes from "./src/routes/app.routes.js";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <Home/>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
