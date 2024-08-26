import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {EventsScreen, GroupsScreen, TeamsScreen} from '../screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs/lib/typescript/src/types';
import {color} from '../constans/theme';
const Tab = createMaterialTopTabNavigator();

const CustomTabBar = (props: MaterialTopTabBarProps) => {
  const {state, navigation} = props;
  const {routes, index} = state;

  return (
    <View style={styles.tabBar}>
      {routes.map((route, idx) => {
        const isActive = index === idx;
        return (
          <View key={route.key} style={styles.tabContainer}>
            <Text
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => navigation.navigate(route.name)}>
              {route.name}
            </Text>
            {isActive && <View style={styles.indicator} />}
          </View>
        );
      })}
    </View>
  );
};

const HomeTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name="Etkinlikler" component={EventsScreen} />
      <Tab.Screen name="Gruplar" component={GroupsScreen} />
      <Tab.Screen name="Takımlar" component={TeamsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  tabContainer: {
    alignItems: 'center',
  },
  tab: {
    fontSize: 16,
    color: color.grey,
    fontWeight: 'bold',
  },
  activeTab: {
    color: color.primary,
    fontWeight: 'bold',
  },
  indicator: {
    marginTop: 5,
    width: '20%',
    height: 3,
    borderRadius: 10,
    backgroundColor: color.primary,
  },
});

export default HomeTabNavigator;
