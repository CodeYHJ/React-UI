import { RuleType } from "@com/Form/FormItem";
export declare const classPre: (pre?: string | number | undefined) => (className?: string | number | undefined) => string;
export declare const verification: (value: string | number, rule: RuleType, message: string) => {
    err: boolean;
    message: string;
};
export declare const hasOwn: (target: Object, key: string) => boolean;
