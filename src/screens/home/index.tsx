import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Container} from '../../components/';
import HomeTabNavigator from '../../navigation/HomeTabNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../../constans/theme';

const LogoContainer: React.FC = () => (
  <View style={styles.logoContainer}>
    <Image
      source={require('../../assets/image/logo1.png')}
      style={styles.logoImage}
    />
  </View>
);

const IconButtons: React.FC = () => (
  <View style={styles.iconContainer}>
    <TouchableOpacity style={styles.iconButton}>
      <Icon name="magnify" size={30} color={color.primary} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <Icon name="bell-outline" size={30} color={color.primary} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <Icon name="message-outline" size={30} color={color.primary} />
    </TouchableOpacity>
  </View>
);

const HomeScreen: React.FC = () => (
  <Container style={{paddingHorizontal: 20}}>
    <View style={styles.header}>
      <LogoContainer />
      <IconButtons />
    </View>
    <View style={styles.tabContainer}>
      <HomeTabNavigator />
    </View>
  </Container>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight && StatusBar.currentHeight + 10,
  },
  logoContainer: {
    flex: 1,
  },
  logoImage: {
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  tabContainer: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
