import { isRussianPhone } from '@/utils/formatPhone';
import { getPhoneNumberMessage } from '@/utils/errorsMessage';

import type { Rules } from 'async-validator';
import type { IForm } from '../types';

export interface IProps {
  form: IForm;
}

export default function useRules(props: IProps) {
  const rules: Rules = {
    email: [
      { type: 'email', message: 'Введите действующий адрес электронной почты' },
      { required: true, message: 'Поле обязательно для заполнения' },
      { max: 25, message: 'Разрешено максимум 25 символов' },
    ],
    password: [
      { type: 'string', message: 'Разрешен только текст' },
      { required: true, message: 'Поле обязательно для заполнения' },
      { min: 5, message: 'Разрешено минимум 5 символов' },
      { max: 25, message: 'Разрешено максимум 25 символов' },
    ],
    repeatPassword: [
      { type: 'string', message: 'Разрешен только текст' },
      { required: true, message: 'Поле обязательно для заполнения' },
      {
        validator() {
          return props.form.password === props.form.repeatPassword;
        },
        message: 'Пароли не совпадают',
      },
    ],
    phone: [
      { type: 'string', message: 'Разрешен только текст' },
      { required: true, message: 'Поле обязательно для заполнения' },
      {
        asyncValidator: (_, value: string) => {
          return new Promise((resolve, reject) => {
            const phoneErrorMessage = getPhoneNumberMessage(value);
            if (phoneErrorMessage === true) {
              if (isRussianPhone(value)) {
                return resolve();
              } else {
                reject('Введите номер телефона в правильном формате');
              }
            } else reject(phoneErrorMessage);
          });
        },
      },
    ],
  };

  return rules;
}
