
import React, { Dispatch, createContext, useReducer } from 'react';

export type InitValue = {
    [key in string | number]: { value: string | number, isErr: boolean }
}
type Action = { type: "UPDATE", playload: InitValue } | { type: "GET" }

type FormContext = {
    formStore: InitValue,
    dispatchForForm: Dispatch<Action>
}
const initValue = {
}
const formItemReducer = (state: InitValue = initValue, action: Action) => {
    switch (action.type) {
        case "UPDATE":
            return { ...state, ...action.playload }
        case "GET":
            return { ...state }
            
    }
}

export const FormContext = createContext({} as FormContext)

export const FormProvider: React.SFC = (props) => {
    const [formStore, dispatchForForm] = useReducer(formItemReducer, initValue);
    return (
        <FormContext.Provider value={{ formStore, dispatchForForm }}>
            {props.children}
        </FormContext.Provider>
    );
}