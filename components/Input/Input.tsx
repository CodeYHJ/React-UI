import React, { HtmlHTMLAttributes, ReactNode, useState, useRef } from 'react';

import { classPre } from '@com/utils';

import './style/input.less';

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  preIconFix?: ReactNode;
  sufIconFix?: ReactNode;
  preStrFix?: string;
  sufStrFix?: string;
  error?: boolean;
  type?: 'text' | 'password' | 'number';
  name?: string;
}

const c = classPre('input');

const Input: React.SFC<InputProps> = (props) => {
  const {
    className,
    value,
    defaultValue,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    preIconFix,
    sufIconFix,
    preStrFix,
    sufStrFix,
    disabled,
    error,
    name,
    type,
    ...others
  } = props;

  const InputBase = (cls: string) => {
    let localDisabled = false;

    if (!error && disabled) {
      localDisabled = true;
    }

    return (
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        className={cls}
        value={value}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        disabled={localDisabled}
        placeholder={placeholder}
        type={type}
        {...others}
      />
    );
  };

  let baseInputCls = c('inputLabel');

  const [focus, setFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!error && (preIconFix || sufIconFix)) {
      setFocus(true);
    }

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!error && (preIconFix || sufIconFix)) {
      setFocus(false);
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  const handleToFocus = () => {
    if (disabled) return;

    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  if (preIconFix && sufIconFix) {
    let cls = [c('allIconFix'), className].filter(Boolean).join(' ');

    if (error) {
      cls = `${cls} ${c('iconError')}`;
    } else if (disabled) {
      cls = `${cls} ${c('iconDisabled')}`;
    }

    const addCls = `${cls} ${c('focus')}`;

    return (
      <span className={focus ? addCls : cls} onClick={handleToFocus}>
        <span className={c('icon')}>{preIconFix}</span>
        {InputBase(baseInputCls)}
        <span className={c('icon')} onClick={handleToFocus}>
          {sufIconFix}
        </span>
      </span>
    );
  }

  if (preStrFix && sufStrFix) {
    let cls = [c('allStrFix'), className].filter(Boolean).join(' ');

    if (error) {
      cls = `${cls} ${c('strError')}`;
    } else if (disabled) {
      cls = `${cls} ${c('strDisabled')}`;
    }

    const addCls = `${cls} ${c('focus')}`;

    return (
      <span className={focus ? addCls : cls} onClick={handleToFocus}>
        <span className={c('str')}>{preStrFix}</span>
        {InputBase(baseInputCls)}
        <span className={c('str')} onClick={handleToFocus}>
          {sufStrFix}
        </span>
      </span>
    );
  }

  if (preIconFix) {
    let cls = [c('preIconFix'), className].filter(Boolean).join(' ');

    if (error) {
      cls = `${cls} ${c('iconError')}`;
    } else if (disabled) {
      cls = `${cls} ${c('iconDisabled')}`;
    }

    const addCls = `${cls} ${c('focus')}`;

    return (
      <span className={focus ? addCls : cls}>
        <span className={c('icon')} onClick={handleToFocus}>
          {preIconFix}
        </span>
        {InputBase(baseInputCls)}
      </span>
    );
  }

  if (sufIconFix) {
    let cls = [c('sufIconFix'), className].filter(Boolean).join(' ');

    if (error) {
      cls = `${cls} ${c('iconError')}`;
    } else if (disabled) {
      cls = `${cls} ${c('iconDisabled')}`;
    }

    const addCls = `${cls} ${c('focus')}`;

    return (
      <span className={focus ? addCls : cls}>
        {InputBase(baseInputCls)}
        <span className={c('icon')} onClick={handleToFocus}>
          {sufIconFix}
        </span>
      </span>
    );
  }

  if (preStrFix) {
    let cls = [c('preStrFix'), className].filter(Boolean).join(' ');

    if (error) {
      cls = `${cls} ${c('strError')}`;
    } else if (disabled) {
      cls = `${cls} ${c('strDisabled')}`;
    }

    const addCls = `${cls} ${c('focus')}`;

    return (
      <span className={focus ? addCls : cls}>
        <div className={c('str')} onClick={handleToFocus}>
          {preStrFix}
        </div>
        {InputBase(baseInputCls)}
      </span>
    );
  }

  if (sufStrFix) {
    let cls = [c('sufStrFix'), className].filter(Boolean).join(' ');

    if (error) {
      cls = `${cls} ${c('strError')}`;
    } else if (disabled) {
      cls = `${cls} ${c('strDisabled')}`;
    }

    const addCls = `${cls} ${c('focus')}`;

    return (
      <span className={focus ? addCls : cls}>
        {InputBase(baseInputCls)}
        <div className={c('str')} onClick={handleToFocus}>
          {sufStrFix}
        </div>
      </span>
    );
  }

  baseInputCls = [baseInputCls, className].filter(Boolean).join(' ');

  if (error) {
    baseInputCls = `${baseInputCls} ${c('error')}`;
  } else if (disabled) {
    baseInputCls = `${baseInputCls} ${c('baseDisabled')}`;
  }

  return InputBase(baseInputCls);
};

Input.defaultProps = {
  disabled: false,
  error: false,
  type: 'text',
};

export default Input;
