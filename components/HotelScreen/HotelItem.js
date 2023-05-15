import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

export default function HotelItem({ item, handleAddSchedule }) {
  const navigation = useNavigation();
  const handleHotelItemClick = () => {
    return navigation.push('HotelDetails', {
      handleAddSchedule,
      item
    });
  };

  return (
    <Pressable onPress={handleHotelItemClick}>
      <View style={styles.container}>
        <View style={styles.HotelContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.picture }} style={styles.imageView} />
          </View>

          <View style={styles.hotelDetails}>
            <Text style={styles.hotelTitle}>{item.name}</Text>
            <Text style={styles.hotelDescription} numberOfLines={2}>{item.description}</Text>
            <Text style={styles.hotelPrice}>
              {new Intl.NumberFormat("en-US", { style: "currency", currency: "PHP"}).format(item.base_price)}
            </Text>
          </View>

          <View style={styles.hotelIcon}>
            <FontAwesome
                name="angle-right"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
              />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container : {
    padding: 12,
    paddingBottom: 0,
  },
  HotelContainer: {
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
  hotelIcon: {
    justifyContent: "center",
    alignContent: "center",
  }
});
