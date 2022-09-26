const getEnvVar = (key: string): string => {
  return process.env[key] || '';
};

const deepClone = (data?: object | any[]) => structuredClone(data);

const safeDestructure = <T>(obj: T): T => {
  return obj != null ? obj : ({} as T);
};

export { getEnvVar, deepClone, safeDestructure };
