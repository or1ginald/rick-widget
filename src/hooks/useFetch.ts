import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type UseFetchReturnType<T> = {
  data: [T | null, Dispatch<SetStateAction<T | undefined>>][0];
  refetch: () => void;
  isLoading: boolean;
  error: string | null;
};

export const useFetch = <T>(
  url: string,
  config?: AxiosRequestConfig,
): UseFetchReturnType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    axios
      .get<T>(url, config)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err: AxiosError) => {
        setData(null);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, config]);

  const refetch = (): void => {
    setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { data, isLoading, error, refetch };
};
