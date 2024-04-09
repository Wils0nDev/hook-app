import { useState, useEffect } from "react";

const localCache = {

}

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  //*Esta función nos va a permitir que cada vez que haya un cambio en la URL los campos se limpiaran y el "cargando..." volvera a salir
  const setLoadingState = () =>{
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  const getFetch = async () => {

    //*si la url enviada ya existe dentro de nuestro cache local, entonces solo optiene los valores almacenados en nuestro objeto
    if(localCache[url]){
      console.log('usando cache')
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return;
    }

    //*Lo ejecutamos antes, para limpiar los campos
    setLoadingState();

    const resp = await fetch(url);

    //sleep 2seg
    await new Promise(resolve => setTimeout(resolve,1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
        data : data,
        isLoading : false,
        hasError: false,
        error: null

    });
    //!Manejo del cache
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
