import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../constans/theme';

const ProfileContent: React.FC = () => (
  <LinearGradient
    colors={[
      'rgba(0, 0, 0, 0.0)',
      'rgba(0, 0, 0, 0.3)',
      'rgba(0, 0, 0, 0.6)',
      'rgba(0, 0, 0, 0.7)',
    ]}
    style={styles.content}>
    <View style={styles.nameAgeContainer}>
      <Text style={styles.nameText}>Halil, </Text>
      <Text style={styles.ageText}>26</Text>
    </View>
    <Text style={styles.usernameText}>halilakyz</Text>
    <View style={styles.locationContainer}>
      <Text style={styles.cityText}>Muğla, </Text>
      <Text style={styles.countryText}>Türkiye</Text>
    </View>
    <View style={styles.smallImagesContainer}>
      <Image
        source={require('../assets/image/icon1.png')}
        style={styles.smallImage}
      />
      <Image
        source={require('../assets/image/icon2.png')}
        style={styles.smallImage}
      />
      <Image
        source={require('../assets/image/icon3.png')}
        style={styles.smallImage}
      />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    padding: 20,
    marginTop: 200,
    zIndex: 1,
  },
  nameAgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.background,
  },
  ageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.background,
  },
  usernameText: {
    fontSize: 18,
    color: color.lightGrey,
    marginTop: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  cityText: {
    fontSize: 16,
    color: color.lightGrey,
  },
  countryText: {
    fontSize: 16,
    color: color.lightGrey,
  },
  smallImagesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  smallImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: color.lightGrey,
  },
});

export default ProfileContent;
