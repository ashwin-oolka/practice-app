import { Stack } from 'expo-router';

// Layout component for the AddTrip screen
const AddTripLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Add New Trip',
      }}
    />
  );
};

export default AddTripLayout;
