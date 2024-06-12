import { useEffect, useState } from "react"


const localCache = {}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })



    useEffect(() => {
        getFetch()
      }, [url])


      const resetState  = () => setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    const getFetch = async() => {
      if(localCache[url] !== undefined ) {
        setState({
          data: localCache[url],
          isLoading: false,
          hasError: false,
          error: null
        })
        return}


        resetState()
        await new Promise((res) =>
          setTimeout(res, 1000)
        )

        const response =  await fetch(url)

        if(!response.ok) {
          setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
              code: response.status,
              message: response.statusText
            }
          })


          return
        }

        const data = await response.json()
        console.log(data);
        setState({
          data: data,
          isLoading: false,
          hasError: false,
          error: null
        })

        localCache[url] = data
      }



  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error
  }
}
