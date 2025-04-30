import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTrips } from '../../context/TripContext';
import { Feather } from '@expo/vector-icons';

/* eslint-disable react-native/no-color-literals */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
  inlineTitleIcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

// TripDetailScreen component that displays the details of a trip
export default function TripDetailScreen() {
  // Custom hook to use the TripContext
  const { trips, deleteTrip } = useTrips();
  const router = useRouter();

  // Get the trip ID from the URL parameters
  const { id } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.id === id);

  // Handle the delete button press
  const handleDelete = () => {
    deleteTrip(String(id));
    router.push('/(tabs)');
  };

  if (!trip) {
    return (
      <View>
        <Text>No trip found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inlineTitleIcon}>
        <Text style={styles.title}>{trip.name}</Text>
        <Feather name="trash" size={24} color="black" onPress={handleDelete} />
      </View>

      <Text style={styles.label}>Destination:</Text>
      <Text style={styles.text}>{trip.destination}</Text>

      <>
        <Text style={styles.label}>Notes:</Text>
        <Text style={styles.text}>{trip.notes || 'No note'}</Text>
      </>

      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => router.push('/(tabs)')} />
      </View>
    </View>
  );
}
