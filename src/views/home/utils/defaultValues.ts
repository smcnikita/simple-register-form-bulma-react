import type { IForm, IError } from '../types';

export const defaultForm: IForm = {
  isShowErrors: false,
  email: '',
  password: '',
  repeatPassword: '',
  phone: '',
  notFormatNumber: '',
  formatNumber: '',
  userInputPhone: '',
};

export const defaultError: IError = {
  email: '',
  password: '',
  repeatPassword: '',
  phone: '',
};
