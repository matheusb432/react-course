import { useCallback, useState } from 'react';
import { useAppDispatch } from '../store';
import { showErrorNotification } from '../store/ui-slice';
import { RequestConfig } from '../types/request-config';
import { getEnvVar } from '../util';

const baseUrl = getEnvVar('REACT_APP_FIREBASE_URL');

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig) => {
      if (requestConfig == null) {
        setError('No request config provided!');

        return;
      }

      setIsLoading(true);
      setError(null);

      const { url, options, handleData, handleError } = requestConfig;
      try {
        const response = await fetch(`${baseUrl}/${url}`, options);

        if (!response.ok) throw new Error('Request failed!');

        const data = await response.json();

        handleData?.(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong!');

        // NOTE Adding fallback error handling logic
        if (handleError == null) showErrorNotification(dispatch);
        handleError?.();
      }
      setIsLoading(false);
    },
    [dispatch]
  );

  return { isLoading, error, sendRequest };
};

export { useFetch };
