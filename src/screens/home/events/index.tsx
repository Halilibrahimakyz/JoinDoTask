import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {color} from '../../../constans/theme';
import EventCard from '../../../components/EventCard';
import ActionButton from '../../../components/ActionButton';

const sampleEvents = [
  {
    logo: require('../../../assets/image/icon3.png'),
    title: 'Basketbol',
    participants: [
      require('../../../assets/image/profile1.jpg'),
      require('../../../assets/image/profile2.jpg'),
      require('../../../assets/image/profile3.jpg'),
      require('../../../assets/image/profile4.jpg'),
      require('../../../assets/image/profile5.jpg'),
      require('../../../assets/image/profile6.jpg'),
    ],
    eventTitle: 'Basketbol Maçı',
    description:
      'Bireysel basketbol oyuncuları arıyoruz! Katılmak isteyenleri bekliyoruz. Maç tarihimiz yaklaşıyor, siz de yeteneklerinizi göstermek istiyorsanız hemen başvurun!',
    date: '24 May Paz',
    time: '18:00',
    participantCount: 8,
  },
  {
    logo: require('../../../assets/image/icon2.png'),
    title: 'Voleybol',
    participants: [
      require('../../../assets/image/profile1.jpg'),
      require('../../../assets/image/profile2.jpg'),
      require('../../../assets/image/profile3.jpg'),
      require('../../../assets/image/profile4.jpg'),
    ],
    eventTitle: 'Voleybol Maçı',
    description:
      'Voleybol oyuncularını bekliyoruz! Bireysel olarak katılmak isteyen sporcular için açık davet. Hemen başvurun, yerinizi alın ve mücadelenize başlayın!',
    date: '24 May Paz',
    time: '16:00',
    participantCount: 4,
  },
  {
    logo: require('../../../assets/image/icon1.png'),
    title: 'Tenis',
    participants: [
      require('../../../assets/image/profile1.jpg'),
      require('../../../assets/image/profile2.jpg'),
      require('../../../assets/image/profile3.jpg'),
      require('../../../assets/image/profile4.jpg'),
      require('../../../assets/image/profile5.jpg'),
      require('../../../assets/image/profile6.jpg'),
    ],
    eventTitle: 'Tenis Maçı',
    description:
      'Tenis tutkunlarına açık! Bireysel tenis oyuncuları için etkinlik. Katılmak isteyenler hemen başvurabilir ve maç tarihini kaçırmadan yerinizi alabilirsiniz.',
    date: '24 May Paz',
    time: '10:00',
    participantCount: 6,
  },
  {
    logo: require('../../../assets/image/icon3.png'),
    title: 'Basketbol',
    participants: [
      require('../../../assets/image/profile1.jpg'),
      require('../../../assets/image/profile2.jpg'),
      require('../../../assets/image/profile3.jpg'),
      require('../../../assets/image/profile4.jpg'),
      require('../../../assets/image/profile5.jpg'),
      require('../../../assets/image/profile6.jpg'),
    ],
    eventTitle: 'Basketbol Maçı',
    description:
      'Bireysel basketbol oyuncuları arıyoruz! Katılmak isteyenleri bekliyoruz. Maç tarihimiz yaklaşıyor, siz de yeteneklerinizi göstermek istiyorsanız hemen başvurun!',
    date: '24 May Paz',
    time: '18:00',
    participantCount: 8,
  },
];

const EventsScreen: React.FC = () => {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

  const toggleSwitch = () =>
    setIsSwitchEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <FlashList
        data={sampleEvents}
        renderItem={({item, index}) => (
          <EventCard
            index={index}
            logo={item.logo}
            title={item.title}
            participants={item.participants}
            eventTitle={item.eventTitle}
            description={item.description}
            date={item.date}
            time={item.time}
            participantCount={item.participantCount}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={300}
        contentContainerStyle={styles.cardArea}
      />
      <ActionButton
        isSwitchEnabled={isSwitchEnabled}
        toggleSwitch={toggleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  cardArea: {
    paddingVertical: 10,
    paddingBottom: 100,
  },
});

export default EventsScreen;
