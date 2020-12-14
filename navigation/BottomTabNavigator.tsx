import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import RosterScreen from '../screens/RosterScreen';
import MatchupScreen from '../screens/MatchupScreen';
import StocksScreen from '../screens/StocksScreen';
import LeagueScreen from '../screens/LeagueScreen';
import { BottomTabParamList, RosterParamList, MatchupParamList, StocksParamList, LeagueParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Roster"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Roster"
        component={RosterNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Matchup"
        component={MatchupNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Stocks"
        component={StocksNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="League"
        component={LeagueNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RosterStack = createStackNavigator<RosterParamList>();

function RosterNavigator() {
  return (
    <RosterStack.Navigator>
      <RosterStack.Screen
        name="RosterScreen"
        component={RosterScreen}
        options={{ headerTitle: 'Roster' }}
      />
    </RosterStack.Navigator>
  );
}

const MatchupStack = createStackNavigator<MatchupParamList>();

function MatchupNavigator() {
  return (
    <MatchupStack.Navigator>
      <MatchupStack.Screen
        name="MatchupScreen"
        component={MatchupScreen}
        options={{ headerTitle: 'Matcup' }}
      />
    </MatchupStack.Navigator>
  );
}

const StocksStack = createStackNavigator<StocksParamList>();

function StocksNavigator() {
  return (
    <StocksStack.Navigator>
      <StocksStack.Screen
        name="StocksScreen"
        component={StocksScreen}
        options={{ headerTitle: 'Stocks' }}
      />
    </StocksStack.Navigator>
  );
}

const LeagueStack = createStackNavigator<LeagueParamList>();

function LeagueNavigator() {
  return (
    <LeagueStack.Navigator>
      <LeagueStack.Screen
        name="LeagueScreen"
        component={LeagueScreen}
        options={{ headerTitle: 'League' }}
      />
    </LeagueStack.Navigator>
  );
}
