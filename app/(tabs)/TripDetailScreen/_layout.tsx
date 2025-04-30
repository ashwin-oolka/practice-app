import { Stack } from 'expo-router';

// Layout component for the TripDetailScreen
const TripDetailLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Trip Detail',
      }}
    />
  );
};

export default TripDetailLayout;
