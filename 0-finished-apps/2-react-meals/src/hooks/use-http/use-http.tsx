import axios, { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { EnvKeys } from '../../types';
import { getEnvValue } from '../../utils';
import { UseHttpOptions } from './types';

axios.defaults.baseURL = getEnvValue(EnvKeys.ApiUrl);

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: AxiosError) => {
    setError(err.message);

    throw err;
  }, []);

  const request = useCallback(
    async (options: UseHttpOptions) => {
      // TODO use transformData from axios?
      const { handleData } = options;

      setIsLoading(true);
      const res = await axios
        .request({ ...options })
        .catch(handleError)
        .finally(() => setIsLoading(false));

      handleData?.(res.data);
    },
    [handleError]
  );

  return { isLoading, error, request };
}

export { useHttp };
