import React, {useState, createContext} from 'react'

export const LoaderContext = createContext();

const LoaderContextProvider = (props) => { 
    const [isLoaderOn, setLoader] = useState(true)
    return (
      <LoaderContext.Provider value={{isLoaderOn, setLoader}}>
          {props.children}
      </LoaderContext.Provider>
    )
  }

export default LoaderContextProvider