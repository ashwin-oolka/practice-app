import { Stack } from "expo-router";

const TripDetailLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Trip Detail",
      }}
    />
  );
};

export default TripDetailLayout;
