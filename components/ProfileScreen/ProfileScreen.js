import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { useState } from 'react';

import { user } from '../../database';
import { useNavigation } from '@react-navigation/native';
export default function ProfileScreen() {
  const [schedules, setSchedules] = useState([]);
  
  const navigation = useNavigation();
  
  const handleAddSchedule = schedule => {
    setSchedules(schedules => {
      return [
        ...(schedules || []),
        schedule,
      ];
    });

    navigation.goBack();
    navigation.goBack();
  };

  const handleBookNowClick = () => {
    return navigation.push('HotelScreen', {
      handleAddSchedule
    });
  };

  console.log(schedules);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: user.profile_image }} style={styles.imageView} />
        </View>

        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileName}>{user.name.last_name}, {user.name.personal_name}</Text>
        </View>

        <View style={styles.bookNowContainer}>
          <Pressable
            style={[styles.bookNowBtn]}
            onPress={handleBookNowClick}
          >
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>Book Hotel</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.scheduleListContainer}>
        <Text style={styles.scheduleTitle}>
          Upcomming Schedules
        </Text>

        <View style={styles.list}>
          <FlatList
            Vertical
            showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
            data={schedules}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => {
              console.log("Item", item, index);
              return (
                <View style={styles.scheduleContainer} key={index}>
                  <View style={styles.scheduleDetailsContainer}>
                    <Text style={styles.hotelTitle}>
                      {item?.name}
                    </Text>
                    <Text style={styles.hotelDescription} numberOfLines={2}>{item?.description}</Text>
                    <Text style={styles.hoteSchedule}>{item?.start}{item?.start !== item?.end ? ` - ${item.end}`: ``}</Text>
                    <Text style={styles.hotelPrice}>
                      {new Intl.NumberFormat("en-US", { style: "currency", currency: "PHP"}).format(item?.base_price)} per night
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.scheduleList}>
          {!schedules?.length &&
            (
              <View style={styles.placeholderContainer}>
                <Text style={styles.placeholderText}>No Upcomming Schedule:</Text>
              </View>
            )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flexDirection: "column",
  },
  profileContainer: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    width: 50,
    height: 50,
  },
  profileDetailsContainer: {
    justifyContent: "center",
    paddingLeft: 12,
    width: "60%"
  },
  profileName: {
    fontWeight: 600,
    fontSize: 16,
  },
  bookNowContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bookNowBtn: {
    padding: 12,
    backgroundColor: "rgb(50,205,50)",
    borderRadius: 8,
  },
  scheduleListContainer: {
    flexDirection: "column",
  },
  scheduleTitle: {
    padding: 8,
  },
  placeholderContainer: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "rgba(0, 0, 0, 0.3)"
  },
  scheduleContainer: {
    padding: 12,
  },
  scheduleDetailsContainer: {
    width: "100%",
    backgroundColor: '#fff',
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    flexDirection: "column",
  },
  imageContainer: {
    width: 50,
    background: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: 50,
    height: 50,
  },
  hotelDetails: {
    flexDirection: "column",
    width: "75%",
  },
  hotelTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  hotelDescription: {
    maxHeight: 50,
  },
  hotelPrice: {
    color: "green",
    padding: 8,
  },
  list: {
    height: "90%",
  }
});
