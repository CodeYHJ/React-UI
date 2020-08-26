import React, { Dispatch } from 'react';
export declare type InitValue = {
    [key in string | number]: {
        value: string | number;
        isErr: boolean;
    };
};
declare type Action = {
    type: "UPDATE";
    playload: InitValue;
} | {
    type: "GET";
};
declare type FormContext = {
    formStore: InitValue;
    dispatchForForm: Dispatch<Action>;
};
export declare const FormContext: React.Context<FormContext>;
export declare const FormProvider: React.SFC;
export {};
