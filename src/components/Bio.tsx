
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color} from '../constans/theme';

const Bio: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Biraz kendinden, biraz da "çağırın gelirim" dediklerinden bahset
        #halısaha #voleybol vb..
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: color.background,
  },
  text: {
    fontSize: 16,
    color: color.grey,
    fontStyle: 'italic',
    fontWeight: '600',
  },
});

export default Bio;
