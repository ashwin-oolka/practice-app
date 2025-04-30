import { Stack } from 'expo-router';
import React from 'react';

// TabLayout component that defines the layout of the tabs
export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
