import { InitValue } from "../FormContext";
import { Result } from "../FormItem";
export interface FormInstance extends React.MutableRefObject<{
    data: any;
    refresh: boolean;
}> {
    getValue: (name: string) => InitValue;
    reFresh: () => void;
    setValue: (name: string, value: string | number, result: Result) => void;
    [key: string]: any;
}
export declare const useForm: (form?: FormInstance | undefined) => FormInstance;
