import { useCallback, useState } from 'react';
import { RequestConfig } from '../types/request-config';
import { getEnvVar } from '../util';

const baseUrl = getEnvVar('REACT_APP_FIREBASE_URL');

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig: RequestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const { url, options, handleData } = requestConfig;

      const response = await fetch(`${baseUrl}/${url}`, options);

      if (!response.ok) throw new Error('Request failed!');

      const data = await response.json();

      handleData?.(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export { useFetch };
