import { useEffect, useState } from "react";
import axios from "axios"; //for making HTTP requests.


// takes a url parameter representing the URL to fetch data from.
// Inside the useFetch function, three state variables are declared using the useState hook:
// data is initialized as an empty array and is used to store the fetched data.
// loading is initially set to false and is used to track the loading state of the data fetching process.
// error is initially set to false and is used to store any error that occurs during the data fetching process.
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // The useEffect hook is used to perform the data fetching operation when the component using the useFetch hook is mounted or
  //  when the url dependency changes. 
  // It defines an asynchronous function fetchData
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);


//   The reFetch function is declared, which performs a manual data refetch.

// It sets the loading state to true to indicate that the refetching process has started.
// An HTTP GET request is made using axios.get with the provided url.
// If the request is successful, the response data is stored in the data state using setData.
// If an error occurs during the request, the error object is stored in the error state using setError.
// Finally, the loading state is set back to false to indicate that the refetching process is complete.
// The useFetch hook returns an object containing the data, loading, error, and reFetch variables. 
// These variables can be used in the component utilizing the useFetch hook to access the fetched data,
//  loading state, error state, and trigger a manual refetch, respectively.
  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;

// By using this useFetch hook in a React component, 
// we can easily handle data fetching from a specified URL,
//  track the loading and error states, and manually trigger a refetch when needed.