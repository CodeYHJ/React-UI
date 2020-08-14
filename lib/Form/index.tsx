import FormBase from "./Form";
import FormItem, { FormItemProps } from "./FormItem";

type FormOptions = {
    Item: typeof FormItem
}

type Form = typeof FormBase & FormOptions

const Form = FormBase as Form

Form.Item = FormItem

export default Form