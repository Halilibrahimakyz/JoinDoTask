import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from '../constans/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface EventCardProps {
  logo: any;
  title: string;
  participants: any[];
  eventTitle: string;
  description: string;
  date: string;
  time: string;
  participantCount: number;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({
  logo,
  title,
  participants,
  eventTitle,
  description,
  date,
  time,
  participantCount,
  index,
}) => {
  const backgroundColor =
    color.cardBackgrounds[index % color.cardBackgrounds.length];

  const maxVisibleParticipants = 6;
  const visibleParticipants = participants.slice(0, maxVisibleParticipants);
  const extraParticipantsCount = participantCount - maxVisibleParticipants;

  return (
    <TouchableOpacity style={[styles.card, {backgroundColor}]}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.participantsContainer}>
        {visibleParticipants.map((participant, idx) => (
          <Image
            key={idx}
            source={participant}
            style={[
              styles.participantImage,
              {
                zIndex: visibleParticipants.length + idx,
              },
            ]}
          />
        ))}
        {extraParticipantsCount > 0 && (
          <View style={styles.extraParticipantsContainer}>
            <Text style={styles.extraParticipantsText}>
              +{extraParticipantsCount}
            </Text>
          </View>
        )}
      </View>
      <Text style={styles.eventInfo} numberOfLines={2} ellipsizeMode="tail">
        <Text style={styles.eventTitle}>{eventTitle}</Text>; {description}
      </Text>
      <View style={styles.footer}>
        <View style={styles.footerIconContainer}>
          <Icon name="calendar" size={20} color="#333" />
          <Text style={styles.dateTime}>{date}</Text>
        </View>
        <View style={styles.footerIconContainer}>
          <Icon name="clock-outline" size={20} color="#333" />
          <Text style={styles.dateTime}>{time}</Text>
        </View>
        <View style={styles.footerIconContainer}>
          <Icon name="account-group" size={20} color="#333" />
          <Text style={styles.participantCount}>
            <Text style={[styles.participantCount, {color: color.grey}]}>
              10/
            </Text>
            {`${participantCount}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    marginBottom: 22,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginBottom: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  participantsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    position: 'relative',
  },
  participantImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginLeft: -10,
    backgroundColor: color.background,
  },
  extraParticipantsContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: color.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
    zIndex: 999,
  },
  extraParticipantsText: {
    fontSize: 16,
    color: color.primary,
    fontWeight: 'bold',
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  eventInfo: {
    paddingHorizontal: 10,
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  footerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTime: {
    color: color.primary,
    marginLeft: 4,
  },
  participantCount: {
    color: color.primary,
    marginLeft: 4,
  },
});

export default EventCard;
