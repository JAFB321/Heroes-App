import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {


    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });


    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((datos) => {

                    if(isMounted.current){
                        setState({
                            data: datos,
                            loading: false,
                            error: null
                        });
                    }

            })
            .catch((error) => {
                setState({
                    loading: false,
                    data: null,
                    error: error
                })
            })

    }, [url]);

    return state;
}
