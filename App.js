import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/views/HomeScreen.js';
import AboutScreen from './app/views/About.js';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
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

/*

        
*/