import FormBase from "./Form";
import FormItem from "./FormItem";
declare type FormOptions = {
    Item: typeof FormItem;
};
declare type Form = typeof FormBase & FormOptions;
declare const Form: Form;
export default Form;
