import { useEffect, useState, useRef } from "react"
const axios = require('axios')


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)

    let isRendered = useRef(false);

    useEffect(() => {
        isRendered = true;
        axios.get(url)
            .then(res => {
                if (isRendered) {
                    setData(Object.assign(res.data))
                }
                setIsPending(false)
                return null;

            })
            .catch(err => console.log(err));
        return () => {
            isRendered = false;
        };
    }, []);


    return { data, isPending }
}




export default useFetch;