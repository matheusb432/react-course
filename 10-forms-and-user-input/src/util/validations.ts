const validateText = (
  text?: string,
  required = true,
  min?: number,
  max?: number
): boolean => {
  const value = text?.trim();
  const len = value?.length;
  const hasText = !!len;

  if (!hasText) return !required;

  return hasText && (min == null || len >= min) && (max == null || len <= max);
};

const validateEmail = (email?: string, required = true): boolean => {
  return !!email?.includes('@');
};

export { validateText, validateEmail };
