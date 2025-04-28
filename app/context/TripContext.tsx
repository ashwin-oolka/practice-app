import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const TripContext = createContext<TripContextType | undefined>(undefined);

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const loadStoredTrips = async () => {
      try {
        const storedTrips = await AsyncStorage.getItem("trips");

        if (storedTrips) {
          setTrips((prevTrips) => [...prevTrips, ...JSON.parse(storedTrips)]);
        }
      } catch (error) {
        console.error("Error loading trips:", error);
      }
    };

    loadStoredTrips();
  }, []);

  useEffect(() => {
    const saveTripsToStorage = async () => {
      try {
        await AsyncStorage.setItem("trips", JSON.stringify(trips));
      } catch (error) {
        console.error("Error saving trips:", error);
      }
    };

    saveTripsToStorage();
  }, [trips]);

  const addTrip = (newTrip: Trip) => {
    setTrips((currentTrips) => [...currentTrips, newTrip]);
  };

  const deleteTrip = (id: string) => {
    setTrips((currentTrips) => currentTrips.filter((trip) => trip.id !== id));
  };

  return (
    <TripContext.Provider value={{ trips, addTrip, deleteTrip }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrips() {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error("useTrips must be used within a TripProvider");
  }
  return context;
}
