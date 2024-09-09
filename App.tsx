import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import { Home, List, Grid, ShoppingCart, User } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let Icon;

              switch (route.name) {
                case 'Home':
                  Icon = Home;
                  break;
                case 'Categories':
                  Icon = List;
                  break;
                case 'Services':
                  Icon = Grid;
                  break;
                case 'Cart':
                  Icon = ShoppingCart;
                  break;
                case 'Account':
                  Icon = User;
                  break;
                default:
                  Icon = Home;
              }

              return <Icon color={color} size={size} />;
            },
            tabBarActiveTintColor: '#ba6c38',
            tabBarInactiveTintColor: '#6B7280',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Categories" component={CategoriesScreen} />
          <Tab.Screen name="Services" component={ServicesScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
