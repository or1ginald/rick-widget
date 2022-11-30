import { ChangeEvent, useState } from 'react';

type UseInputReturnType = {
  resetInput: () => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const useInput = (initValue: string = ''): UseInputReturnType => {
  const [value, setValue] = useState(initValue);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const resetInput = (): void => {
    setValue('');
  };

  return { value, onInputChange, resetInput };
};
