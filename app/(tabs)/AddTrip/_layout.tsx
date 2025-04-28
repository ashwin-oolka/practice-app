import { Stack } from "expo-router";

const AddTripLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Add New Trip",
      }}
    />
  );
};

export default AddTripLayout;
