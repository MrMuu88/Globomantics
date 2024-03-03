import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/views/HomeScreen.js';
import AboutScreen from './app/views/About.js';
import RegisterScreen from './app/views/Registration.js';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={{ title: 'About' }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;