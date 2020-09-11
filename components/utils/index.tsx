import { RuleType } from '@com/Form/FormItem';

export const classPre = (pre?: string | number) => {
  let p = pre;

  if (p && typeof p === 'number') {
    p = String(p);
  }

  const preClass = ['code-ui', p].filter(Boolean).join('-');

  return (className?: string | number) => {
    return [preClass, className].filter(Boolean).join('-');
  };
};

export const verification = (
  value: string | number,
  rule: RuleType,
  message: string
) => {
  const baseResult = {
    err: false,
    message,
  };

  const valueStr = String(value);

  if (rule.type === 'text' || rule.type === 'number') {
    const { length } = valueStr;

    const { len, max, min } = rule;

    if (len && length > len) {
      return { ...baseResult, err: true };
    }

    if (max && length > max) {
      return { ...baseResult, err: true };
    }

    if (min && length < min) {
      return { ...baseResult, err: true };
    }
  } else if (rule.type === 'email') {
    // eslint-disable-next-line no-useless-escape
    const reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;

    return { ...baseResult, ...{ err: !reg.test(valueStr) } };
  } else if (rule.type === 'phone') {
    const reg = /^1[34578]\d{9}$/g;

    return { ...baseResult, ...{ err: !reg.test(valueStr) } };
  }

  return baseResult;
};

export const hasOwn = (target: Object, key: string) => {
  return Object.prototype.hasOwnProperty.call(target, key);
};
