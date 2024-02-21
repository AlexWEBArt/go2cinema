import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, options) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const timestampRef = useRef();

    useEffect(() => { 
        const fetchData = async () => {
            const timestamp = Date.now();
            timestampRef.current = timestamp;
            setLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) { throw new Error(response.statusText); }
                const jsonData = await response.json();
                if (timestampRef.current === timestamp) { setData(jsonData); }
                setError(null);
            } catch (e) {
                // console.log(e)
                setError(e);
            } finally { setLoading(false); }
        };
        fetchData();
    }, [url, options]);

    return {data, loading, error};
}