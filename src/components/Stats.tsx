import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color} from '../constans/theme';

const Stats: React.FC = () => (
  <View style={styles.statsContainer}>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>10</Text>
      <Text style={styles.statLabel}>Sportmenlik</Text>
    </View>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>150</Text>
      <Text style={styles.statLabel}>Etkinlikler</Text>
    </View>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>75</Text>
      <Text style={styles.statLabel}>Do friends</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: color.yellow,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.primary,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: color.primary,
  },
});

export default Stats;
