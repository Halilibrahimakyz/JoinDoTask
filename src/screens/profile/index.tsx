import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Animated,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  ProfileHeader,
  ProfileContent,
  Stats,
  Settings,
  Bio,
} from '../../components/';
import {Container} from '../../components/';

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const ProfileScreen: React.FC = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const backgroundScale = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 1.1],
    extrapolate: 'clamp',
  });

  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <AnimatedImageBackground
          source={require('../../assets/image/profile2.jpg')}
          style={[
            styles.backgroundImage,
            {transform: [{scale: backgroundScale}]},
          ]}
        />
        <ProfileHeader scrollY={scrollY} />
        <Animated.ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}
          style={styles.scrollView}>
          <View style={styles.overlayContent}>
            <ProfileContent />
            <Stats />
            <Bio />
            <Settings />
          </View>
        </Animated.ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  scrollView: {
    marginTop: 100,
    zIndex: 2,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  overlayContent: {
    flex: 1,
  },
});

export default ProfileScreen;
