import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Trip = {
  name: string;
  destination: string;
  id: string;
  notes: string;
};

type TripContextType = {
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  deleteTrip: (id: string) => void;
};

// Create a context for the TripContext
const TripContext = createContext<TripContextType | undefined>(undefined);

// Provider component for the TripContext
export function TripProvider({ children }: { children: React.ReactNode }) {
  // State to store the list of trips
  const [trips, setTrips] = useState<Trip[]>([]);

  // Load trips from AsyncStorage
  useEffect(() => {
    const loadStoredTrips = async () => {
      try {
        const storedTrips = await AsyncStorage.getItem('trips');

        if (storedTrips) {
          setTrips((prevTrips) => [...prevTrips, ...JSON.parse(storedTrips)]);
        }
      } catch (error) {
        console.error('Error loading trips:', error);
      }
    };

    loadStoredTrips();
  }, []);

  // Save trips to AsyncStorage
  useEffect(() => {
    const saveTripsToStorage = async () => {
      try {
        await AsyncStorage.setItem('trips', JSON.stringify(trips));
      } catch (error) {
        console.error('Error saving trips:', error);
      }
    };

    saveTripsToStorage();
  }, [trips]);

  // Add a new trip to the list
  const addTrip = (newTrip: Trip) => {
    setTrips((currentTrips) => [...currentTrips, newTrip]);
  };

  // Delete a trip from the list
  const deleteTrip = (id: string) => {
    setTrips((currentTrips) => currentTrips.filter((trip) => trip.id !== id));
  };

  return (
    <TripContext.Provider value={{ trips, addTrip, deleteTrip }}>{children}</TripContext.Provider>
  );
}

// Custom hook to use the TripContexts
export function useTrips() {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrips must be used within a TripProvider');
  }
  return context;
}
