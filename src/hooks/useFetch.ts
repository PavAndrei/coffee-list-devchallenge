import { useEffect, useState } from "react";
import { ICoffee } from "../models/ICoffee";

interface UseFetchResult {
  data: ICoffee[] | null;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<ICoffee[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
