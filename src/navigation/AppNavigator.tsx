import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../constans/theme';
import {HomeScreen, ProfileScreen, SampleScreen} from '../screens';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 10,
          backgroundColor: color.background,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const iconName = 'home-outline';
            return (
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={iconName}
                  color={focused ? color.primary : color.grey}
                  size={30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SampleScreen1"
        component={SampleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const iconName = 'cards-outline';
            return (
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={iconName}
                  color={focused ? color.primary : color.grey}
                  size={30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SampleScreen2"
        component={SampleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const iconName = 'map-outline';
            return (
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={iconName}
                  color={focused ? color.primary : color.grey}
                  size={30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SampleScreen3"
        component={SampleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const iconName = 'play-box-outline';
            return (
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={iconName}
                  color={focused ? color.primary : color.grey}
                  size={30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/image/profile1.jpg')}
                  style={[
                    styles.profileImage,
                    {borderColor: focused ? color.primary : color.grey},
                  ]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
  },
});

export default BottomTabNavigator;
