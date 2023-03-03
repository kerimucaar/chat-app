import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = options => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () => setRefetchIndex(prev => prev + 1);

  useEffect(() => {
    if (!options.method.length || !options.url.length) return console.error('Missing parameters on request!');

    const request = async () => {
      // INITIAL LOADING AND DEFAULTS ON URL CHANGE
      setLoading(true);
      setError(null);
      setResponse(null);

      try {
        const data = await axios.request(options);
        setResponse(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    request();
  }, [options.url, options.method, refetchIndex]);

  return { response, loading, error, refetch };
};

export default useAxios;
