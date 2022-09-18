import { useCallback, useState } from 'react';
import { RequestConfig } from '../types/request-config';
import { firebaseUrl } from '../util';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // NOTE declaring the async api call inside the hook so that it can be called in the component's functions
  // NOTE useCallback so that it does not cause an infinite loop in the component that calls useFetch
  const sendRequest = useCallback(async (requestConfig: RequestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const { url, options, handleData } = requestConfig;

      const response = await fetch(url, options);

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
