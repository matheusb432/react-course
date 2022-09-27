import { useRef } from 'react';

const useInputRef = <T = HTMLInputElement>() => useRef<T>(null);

export { useInputRef };
