import { createContext, useContext, useEffect, useState } from "react";
import { ICoffee } from "../models/ICoffee";
import { useFetch } from "../hooks/useFetch";

export type DataContextValues = {
  menu: ICoffee[] | undefined | null;
  changeFilters: (newFilter: string) => void;
  isLoading: boolean;
  error: Error | null;
};

const DataContext = createContext<DataContextValues | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState<ICoffee[] | null | undefined>(null);
  const [filters, setFilters] = useState("all");

  const { data, isLoading, error } = useFetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
  );

  useEffect(() => {
    if (filters === "all") {
      setMenu(data);
    } else if (filters === "availiable") {
      setMenu(data?.filter((coffee) => coffee.available));
    }
  }, [filters, data]);

  const changeFilters = (newFilter: string) => {
    setFilters(newFilter);
  };

  return (
    <DataContext.Provider value={{ menu, isLoading, error, changeFilters }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useDataProvider must be used within DataProvider");
  return context;
};
