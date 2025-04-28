import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useTrips } from "../../context/TripContext";

export default function TripDetailScreen() {
  const { trips } = useTrips();
  const router = useRouter();

  const { id } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.id === id);

  if (!trip) {
    return (
      <View>
        <Text>No trip found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trip.name}</Text>
      <Text style={styles.label}>Destination:</Text>
      <Text style={styles.text}>{trip.destination}</Text>

      {trip.notes && (
        <>
          <Text style={styles.label}>Notes:</Text>
          <Text style={styles.text}>{trip.notes || "No notes"}</Text>
        </>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => router.push("/(tabs)")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
});
