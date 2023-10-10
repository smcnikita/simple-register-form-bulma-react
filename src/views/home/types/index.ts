export interface IForm {
  isShowErrors: boolean;
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
  notFormatNumber: string;
  formatNumber: string;
  userInputPhone: string;
}

export interface IError {
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
}
