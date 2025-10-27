import { useRef, useCallback } from 'react';

// Custom hook for debouncing function calls
export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T => {
  const timeoutRef = useRef<number | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay) as number;
    },
    [callback, delay]
  ) as T;
};
