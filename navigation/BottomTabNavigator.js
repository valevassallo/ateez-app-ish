import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Platform } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import MembersScreen from '../screens/MembersScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? "ios-home" : "md-home"} />,
        }}
      />
      <BottomTab.Screen
        name="Members"
        component={MembersScreen}
        options={{
          title: 'Members',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? "ios-people" : "md-people"} />,
        }}
      />
      <BottomTab.Screen
        name="Sources"
        component={LinksScreen}
        options={{
          title: 'Sources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? "ios-book" : "md-book"} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Get started with ATEEZ';
    case 'Members':
      return 'Members';
    case 'Sources':
      return 'Sources'
  }
}
