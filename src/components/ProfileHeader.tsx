import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Animated, StatusBar} from 'react-native';
import {color} from '../constans/theme';

const logos = {
  logo1: require('../assets/image/logo1.png'),
  logo2: require('../assets/image/logo2.png'),
};

interface ProfileHeaderProps {
  scrollY: Animated.Value;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({scrollY}) => {
  const headerHeight = 100;
  const [logo, setLogo] = useState(logos.logo2);

  useEffect(() => {
    const listenerId = scrollY.addListener(({value}) => {
      if (value > headerHeight) {
        setLogo(logos.logo1);
      } else {
        setLogo(logos.logo2);
      }
    });

    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [scrollY]);

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: ['transparent', color.background],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          backgroundColor: headerBackgroundColor,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: headerHeight,
          zIndex: 1,
        },
      ]}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10,
    zIndex: 1,
  },
  logoContainer: {
    flex: 1,
  },
  logoImage: {
    resizeMode: 'contain',
  },
});

export default ProfileHeader;
