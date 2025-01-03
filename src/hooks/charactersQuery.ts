import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Character, CharactersApiResponse } from '../types/rick-and-morty';

const useCharactersFilter = () => {
  const [searchParams] = useSearchParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<number | 0>(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const page = searchParams.get('page') || '1';
      const name = searchParams.get('name') || '';
      const status = searchParams.get('status') || '';
      const species = searchParams.get('species') || '';
      const type = searchParams.get('type') || '';
      const gender = searchParams.get('gender') || '';

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`,
        );

        setStatusCode(response.status);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: CharactersApiResponse = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return { characters, totalPages, isLoading, error, statusCode };
};

export default useCharactersFilter;
