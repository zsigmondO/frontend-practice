import { useCallback, useRef } from 'react';

import '../card.scss';

export function getStatusAndSpecies(
  status: 'alive' | 'dead' | 'unknown',
  species: string,
) {
  if (status.toLowerCase() === 'alive') {
    return (
      <div className="flex items-center">
        <p className="icon bg-green-400" />
        <p className="status">
          {status} - {species}
        </p>
      </div>
    );
  } else if (status.toLowerCase() === 'unknown') {
    return (
      <div className="flex items-center">
        <p className="icon bg-gray-400" />
        <p className="status">
          {status} - {species}
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <p className="icon bg-red-400" />
      <p className="status">
        {status} - {species}
      </p>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
  // eslint-disable-next-line no-unused-vars
): (...args: Parameters<T>) => void {
  // eslint-disable-next-line no-undef
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
