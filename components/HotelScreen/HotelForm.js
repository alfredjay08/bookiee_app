import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DatePicker from 'react-native-datepicker';

export default function HotelForm({ handleAddSchedule, isVisible, onClose }) {
  const [startDate, setStartDate] = useState('15/05/2023');
  const [endDate, setEndDate] = useState('15/05/2023');
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose Dates</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>

        <View style={styles.bodyContainer}>
            <Text style={styles.formText}>Start Date :</Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={startDate}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-2023"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor : "gray",
                  alignItems: "flex-start",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: "#fff"
                },
                dateText: {
                  fontSize: 17,
                  color: "#fff"
                }
              }}
              onDateChange={(date) => {
                setStartDate(date);
              }}
            />

            <Text style={styles.formText}>End Date :</Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={endDate}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-2023"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor : "gray",
                  alignItems: "flex-start",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: "#fff"
                },
                dateText: {
                  fontSize: 17,
                  color: "#fff"
                }
              }}
              onDateChange={(date) => {
                setEndDate(date);
              }}
            />

        <Pressable
          style={[styles.bookBtn]}
          onPress={() => handleAddSchedule(startDate, endDate)}
        >
          <FontAwesome
            name="calendar"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>Submit Booking</Text>
        </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '30%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bodyContainer: {
      padding: 12,
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
    datePickerStyle: {
      width: "100%",
      color: "#fff",
      marginBottom: 12
    },
    formText: {
      textAlign: 'left',
      width: 230,
      fontSize: 16,
      color : "#fff"
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
      paddingLeft: 8,
    }
  });