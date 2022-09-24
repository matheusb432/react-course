import { ValidationData } from './validation-data';

const validateText = (text?: string, data?: ValidationData) => {
  const { required = true, min, max } = data || {};

  if (!text?.trim() || text == null) return !required;

  const len = text.length;

  return !!text.trim() && (!min || len >= min) && (!max || len <= max);
};

const validateEmail = (email?: string): boolean => {
  return !!email?.includes('@');
};

const validateId = (id: any) => id != null && typeof +id === 'number';

export { validateText, validateEmail, validateId };
