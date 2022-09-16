const validateString = (value: string) => {
  return value?.trim()?.length > 0;
};

export { validateString };
