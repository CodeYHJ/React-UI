
import React, { Dispatch, createContext, useReducer } from 'react';

type InitValue = {
    value: string
}
type Action = { type: "UPDATE", playload: InitValue }

type FormItemContext = {
    formItemStore: InitValue,
    dispatchForFormItem: Dispatch<Action>
}
const initValue = {
    value: ''
}
const formItemReducer = (state: InitValue, action: Action) => {
    switch (action.type) {
        case "UPDATE":
            return { ...state, ...action.playload }
    }
}

export const FormItemContext = createContext({} as FormItemContext)

export const FormItemProvider: React.SFC = (props) => {
    const [formItemStore, dispatchForFormItem] = useReducer(formItemReducer, initValue);
    return (
        <FormItemContext.Provider value={{ formItemStore, dispatchForFormItem }}>
            {props.children}
        </FormItemContext.Provider>
    );
}