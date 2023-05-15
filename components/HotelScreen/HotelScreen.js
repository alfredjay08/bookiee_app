import { StyleSheet, Text, View } from 'react-native';

import { hotels } from '../../database';
import HotelList from './HotelList';
import HotelSearch from './HotelSearch';

export default function HotelScreen({ route }) {
  const { params } = route;
  const { handleAddSchedule } = params;
  return (
    <View style={styles.container}>
      {/* <HotelSearch></HotelSearch> */}

      <HotelList lists={hotels} handleAddSchedule={handleAddSchedule}></HotelList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    flexDirection: "row",
  },
});
