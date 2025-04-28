import React, { createContext, useContext, useState } from "react";

type Trip = {
  name: string;
  destination: string;
  id: string;
  notes: string;
};

type TripContextType = {
  trips: Trip[];
  addTrip: (trip: Trip) => void;
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [trips, setTrips] = useState<Trip[]>([]);

  const addTrip = (newTrip: Trip) => {
    setTrips([...trips, newTrip]);
  };

  return (
    <TripContext.Provider value={{ trips, addTrip }}>
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
