import React from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { TripProvider } from './context/TripContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// RootLayout component that provides the TripProvider and the Stack navigator
export default function RootLayout() {
  return (
    <TripProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="AddTrip" options={{ headerShown: false }} />
        <Stack.Screen
          name="(tabs)/TripDetailScreen/[id]"
          options={{
            title: 'Trip Details',
            headerShown: true,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </TripProvider>
  );
}
