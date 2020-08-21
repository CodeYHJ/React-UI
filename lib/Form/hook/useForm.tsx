import { useRef, useMemo } from "react"
import { InitValue } from "../FormContext"
import { Result } from "../FormItem"
export interface FormInstance extends React.MutableRefObject<{
    data: any;
    refresh: boolean;
}> {
    getValue: (name: string) => InitValue,
    reFresh: () => void,
    setValue: (name: string, value: string | number, result: Result) => void
    [key: string]: any

}
export const useForm = (form?: FormInstance) => {
    const ref = useRef<{
        data: {
            [key: string]: any
        };
        refresh: boolean;
    }>({ data: {}, refresh: false })
    const refForm: FormInstance = useMemo(() => {
        if (!form) {
            return {
                ...ref,
                getValue: (name: string): InitValue => {

                    return ref.current.data[name]
                },
                setValue: (name: string, value: string | number, result: Result) => {
                    ref.current.data[name] = { value, ...result }
                },
                reFresh: () => {
                    ref.current.refresh = !ref.current.refresh
                }
            }
        } else {
            return form
        }
    }, [form])
    return refForm
}