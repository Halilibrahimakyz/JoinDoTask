import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from '../constans/theme';

const Settings: React.FC = () => {
  const settingsOptions = [
    { text: 'Favori Sporlarım', leftIcon: 'star', rightIcon: 'chevron-right' },
    { text: 'Profili Düzenle', leftIcon: 'account-edit', rightIcon: 'chevron-right' },
    { text: 'Hesap Ayarları', leftIcon: 'cog', rightIcon: 'chevron-right' },
    { text: 'Sözleşmeler', leftIcon: 'file-document', rightIcon: 'chevron-right' },
    { text: 'Yaşadığın Bölgeyi Seç', leftIcon: 'map-marker', rightIcon: 'chevron-right' },
    { text: 'Premium Abonelik', leftIcon: 'star-outline', rightIcon: 'chevron-right' },
    { text: 'Çıkış Yap', leftIcon: 'logout', rightIcon: 'chevron-right' },
  ];

  const generateVibrantColor = () => {
    const getRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const red = getRandomValue(0, 200);
  const green = getRandomValue(0, 200);
  const blue = getRandomValue(0, 200);

  return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View style={styles.settingsContainer}>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.settingItem}>
          <View style={styles.optionContainer}>
            <View style={styles.iconContainer}>
              <Icon name={option.leftIcon} size={24} color={generateVibrantColor()} />
            </View>
            <Text style={styles.settingText}>{option.text}</Text>
            <Icon name={option.rightIcon} size={24} color={color.primary} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    paddingHorizontal: 20,
    backgroundColor: color.background,
  },
  settingItem: {
    paddingVertical: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginRight: 10,
    backgroundColor:'#ddd'
  },
  settingText: {
    fontSize: 16,
    color: color.primary,
    flex: 1,
    textAlign: 'left',
    fontWeight:'bold'
  },
});

export default Settings;
