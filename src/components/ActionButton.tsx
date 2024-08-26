import React from 'react';
import {View, Text, TouchableOpacity, Switch, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../constans/theme';

interface ActionButtonProps {
  isSwitchEnabled: boolean;
  toggleSwitch: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  isSwitchEnabled,
  toggleSwitch,
}) => {
  return (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={[styles.actionButton, styles.switchButton]}>
        <Icon name="filter-outline" size={24} color={color.primary} />
        <View style={styles.separator}></View>
        <Switch
          value={isSwitchEnabled}
          onValueChange={toggleSwitch}
          thumbColor={color.background}
          trackColor={{false: color.grey, true: color.primary}}
        />
        <Text style={styles.actionButtonText}>Harita</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, {backgroundColor: color.yellow}]}>
        <Icon name="plus" size={24} color={color.primary} />
        <Text style={styles.actionButtonText}>Oluştur</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.background,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  switchButton: {
    backgroundColor: color.background,
  },
  separator: {
    height: 10,
    marginHorizontal: 5,
    borderLeftColor: '#ddd',
    borderRadius: 10,
    borderLeftWidth: 2,
  },
  actionButtonText: {
    color: color.primary,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActionButton;
