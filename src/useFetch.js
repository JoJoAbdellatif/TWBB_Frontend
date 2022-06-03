import { useEffect, useState } from "react"
const axios = require('axios')


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const abortCont = new AbortController();
    try {
        const getData = async () => {
            const data = await axios.get(url, { signal: abortCont.signal })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
            setData(Object.assign(data.data))
            // console.log(Object.assign(data.data))
            setIsPending(false)
            setError(null)
        }
        getData()
        return { data, isPending, error }
    } catch (err) {
        if (err.name === 'AbortError') {
            console.log('fetch aborted')
        } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
        }
        return () => abortCont.abort();
    }
    
}

export default useFetch;