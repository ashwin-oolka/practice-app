import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTrips } from "../../context/TripContext";

export default function AddTripScreen() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [notes, setNotes] = useState("");

  const { addTrip } = useTrips();
  const router = useRouter();

  useEffect(() => {
    setName("");
    setDestination("");
    setNotes("");
  }, []);

  const handleSubmit = () => {
    if (name && destination) {
      addTrip({
        name,
        destination,
        id: Date.now().toString(),
        notes,
      });
      router.push("/(tabs)");
    }
  };

  const as = null;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Trip Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity
        style={[
          styles.submitButton,
          (!name || !destination) && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        disabled={!name || !destination}
      >
        <Text style={styles.submitButtonText}>{as.as}Add Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
});
