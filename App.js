import HotelScreen from "./components/HotelScreen/HotelScreen";
import ProfileScreen from './components/ProfileScreen/ProfileScreen';
import HotelDetails from "./components/HotelScreen/HotelDetails";

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ProfileScreen'
      >
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            title: "Profile"
          }}
        />
        <Stack.Screen
          name='HotelScreen'
          component={HotelScreen}
          options={{
            title: "Hotel List"
          }}
        />
        <Stack.Screen
          name='HotelDetails'
          component={HotelDetails}
          options={{
            title: "Hotel Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
