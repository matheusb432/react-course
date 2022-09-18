import axios, { Axios, AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { EnvKeys } from '../../types';
import { getEnvValue } from '../../utils';
import { UseHttpOptions } from './types';

axios.defaults.baseURL = getEnvValue(EnvKeys.ApiUrl);

function useHttp() {
  const [isLoading, setIsLoading] = useState<boolean | undefined>();
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: AxiosError) => {
    setError(err?.message ?? 'Something went wrong!');

    throw err;
  }, []);

  const request = useCallback(
    async (options: UseHttpOptions) => {
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
