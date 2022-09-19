import { EnvKeys, FirebaseResponse } from '../types';

const getEnvValue = (key: EnvKeys) => process.env[key];

const mapFirebaseResponse = <T = any>(data: FirebaseResponse<T>): T[] => {
  if (!data) return [];

  const mappedData: T[] = [];

  for (const key in data) {
    mappedData.push({
      id: key,
      ...data[key],
    });
  }

  return mappedData;
};

export { getEnvValue, mapFirebaseResponse };
