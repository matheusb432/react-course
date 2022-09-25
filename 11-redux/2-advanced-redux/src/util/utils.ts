const getEnvVar = (key: string): string => {
  return process.env[key] || '';
};

export { getEnvVar };
