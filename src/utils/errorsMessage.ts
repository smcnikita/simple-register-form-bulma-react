export const getPhoneNumberMessage = (phoneNumber: string) => {
  const message = 'Введите номер телефона в правильном формате';

  if (phoneNumber.replace(/\D/g, '').length === 10 && phoneNumber[0] === '9') return true;

  if (phoneNumber.replace(/\D/g, '').length === 11 && phoneNumber[0] === '9') return message;

  if (phoneNumber.replace(/\D/g, '').length < 11)
    return 'Введите номер телефона в правильном формате';
  else if (phoneNumber.replace(/\D/g, '').length > 11) return message;
  else return true;
};
