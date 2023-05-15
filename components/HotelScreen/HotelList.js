import { StyleSheet, Text, View, FlatList } from 'react-native';
import HotelItem from './HotelItem';

export default function HotelList({ lists, handleAddSchedule }) {
  return (
    <FlatList
      Vertical
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={lists}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, idx }) => {
        return (
          <HotelItem item={item} key={idx} handleAddSchedule={handleAddSchedule}></HotelItem>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
});
