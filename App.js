import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/views/HomeScreen.js';
import AboutScreen from './app/views/About.js';
import RegisterScreen from './app/views/Registration.js';
import LoginScreen from './app/views/Login.js';
import GloboHeader from './app/components/Header.js';
import ComingSoonScreen from './app/views/ComingSoon.js';
import BlogScreen from './app/views/Blog.js';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ header: GloboHeader }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ title: 'Register', headerShown: false }}
        />
        <Stack.Screen
          name='Lessons'
          component={ComingSoonScreen}
        />
        <Stack.Screen
          name='Quiz'
          component={ComingSoonScreen}
        />
        <Stack.Screen
          name='Blog'
          component={BlogScreen}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={{ title: 'About' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;