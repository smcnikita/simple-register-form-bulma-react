export const isRussianPhone = (phoneNumber: string) => {
  return ['7', '8', '9'].includes(phoneNumber[0]) || phoneNumber.substring(0, 2) === '+7';
};

interface IFormattingPhoneReturn {
  /** Неотформатированный телефон, готовый к отправке на бэкэнд */
  notFormatNumber: string;
  /** Отформатированный телефон, готовый к показу пользователю */
  formatNumber: string;
  /** Телефон, который ввел пользователь */
  userInputPhone: string;
}

/**
 * Форматирование российского номера телефона
 * Если возвращается `false`, то в переданной строке меньше 11 числовых символов
 * @param {string} userInputPhone - Пользовательский номер телефона. Допускаются только номера, прошедшие проверку isRussianPhone
 */
export const formattingPhone = (userInputPhone: string): false | IFormattingPhoneReturn => {
  let notFormatNumber = userInputPhone.replace(/\D/g, '');

  if (notFormatNumber[0] === '9') notFormatNumber = '7' + notFormatNumber;

  if (notFormatNumber.length !== 11) {
    // номер телефона РФ состоит из 11 символов
    return false;
  }

  let formatNumber: string;

  if (notFormatNumber[0] === '8') {
    formatNumber = '8';
  } else {
    formatNumber = '+7';
  }

  formatNumber += ' (' + notFormatNumber.substring(1, 4);
  formatNumber += ') ' + notFormatNumber.substring(4, 7);
  formatNumber += '-' + notFormatNumber.substring(7, 9);
  formatNumber += '-' + notFormatNumber.substring(9, 11);

  // замена первого символа с 8 на 7, для бэкэнда
  if (notFormatNumber[0] === '8') notFormatNumber = '7' + notFormatNumber.slice(1, 11);

  return {
    notFormatNumber: notFormatNumber,
    formatNumber: formatNumber,
    userInputPhone: userInputPhone,
  };
};
