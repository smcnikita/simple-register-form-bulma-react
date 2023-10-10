import { formattingPhone, isRussianPhone } from '@/utils/formatPhone';
import type { IForm } from '../types';

interface IProps {
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
}

const useChangePhone = (props: IProps) => {
  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;

    props.setForm((prev) => ({
      ...prev,
      phone: target,
    }));

    if (isRussianPhone(target)) {
      const tel = formattingPhone(target);

      if (tel !== false) {
        props.setForm((prev) => ({
          ...prev,
          formatNumber: tel.formatNumber,
          notFormatNumber: tel.notFormatNumber,
          userInputPhone: tel.userInputPhone,
          phone: tel.formatNumber,
        }));
      }
    }
  };

  return { onChangePhone };
};

export default useChangePhone;
