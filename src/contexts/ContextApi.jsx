import React, { createContext, useState } from 'react'

export const editWorkoutResponseContext = createContext()

const ContextApi = ({children}) => {
          const [editWorkoutResponse, setEditWorkoutResponse]= useState("")
  return (
          <editWorkoutResponseContext.Provider value={{editWorkoutResponse, setEditWorkoutResponse}}>
          
                {children}
          
        </editWorkoutResponseContext.Provider>
  )
}

export default ContextApi