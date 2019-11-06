/**
 * 
 * useHttp: Custom Hook 
 * arguments: url and conditions 
 * function: fetch data from url and return it 
 * 
 */
import { useState , useEffect } from 'react';

export const useHttp = (url,conditions) => {
    const [isLoading,setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        console.log('Sending request to :' + url)
        setIsLoading(false);
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch.');
            }
            return response.json();
          })
          .then(data => {
            setFetchedData(data);
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          });
      },conditions)

      return [isLoading,fetchedData]

}