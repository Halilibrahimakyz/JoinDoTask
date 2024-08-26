import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  StyleProp,
} from 'react-native';

interface ContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<ContainerProps> = ({children, style}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Container;
