import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type UseFetchReturnType<T> = {
  data: [T | undefined, Dispatch<SetStateAction<T | undefined>>][0];
  refetch: () => void;
  isLoading: boolean;
  error: AxiosError<unknown, any> | undefined;
};

export const useFetch = <T>(
  url: string,
  config?: AxiosRequestConfig,
): UseFetchReturnType<T> => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<T>(url, config)
      .then(response => {
        setData(response.data);
      })
      .catch((err: AxiosError) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

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
