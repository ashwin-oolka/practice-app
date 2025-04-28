import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useTrips } from "../context/TripContext";

export default function HomeScreen() {
  const { trips } = useTrips();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Add New Trip"
        onPress={() => router.push("/(tabs)/AddTrip")}
      />
      <FlatList
        data={trips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/(tabs)/TripDetailScreen",
                params: { id: item.id },
              })
            }
          >
            <Text style={styles.item}>
              {item.name} - {item.destination}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#ccc" },
});
