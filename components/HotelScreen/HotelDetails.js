import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HotelForm from './HotelForm';

export default function HotelItem({ route }) {
  const [isVisible, setModalVisible] = useState(false);
  const { params } = route;
  const { handleAddSchedule, item } = params;

  const handleScheduleCreation = (start, end) => {
    const selectedSchedule = {
      ...item,
      start,
      end,
    };
    handleAddSchedule(selectedSchedule);
  };

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.HotelContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.picture }} style={styles.imageView} />
        </View>

        <View style={styles.hotelDetails}>
          <Text style={styles.hotelTitle}>{item.name}</Text>
          <Text style={styles.hotelDescription}>{item.description}</Text>
          <Text style={styles.hotelPrice}>
            {new Intl.NumberFormat("en-US", { style: "currency", currency: "PHP"}).format(item.base_price)} per night
          </Text>
        </View>
      </View>

      <View style={styles.BookBtnContainer}>
        <Pressable
          style={[styles.bookBtn]}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome
            name="calendar"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>Book Now</Text>
        </Pressable>
      </View>

      {isVisible &&
        (
          <HotelForm handleAddSchedule={handleScheduleCreation} onClose={closeModal}></HotelForm>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  HotelContainer: {
    flexDirection: "column",
  },
  imageContainer: {
    maxHeight: 200,
  },
  imageView: {
    height: 200,
  },
  hotelTitle: {
    padding: 8,
    fontWeight: 600,
    fontSize: 22,
  },
  hotelDescription: {
    fontSize: 16,
    padding: 8,
  },
  hotelPrice: {
    color: "green",
    padding: 8,
  },
  BookBtnContainer: {
    padding: 8,
  },
  bookBtn: {
    backgroundColor: "rgb(50,205,50)",
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    paddingLeft: 12,
  }
});
