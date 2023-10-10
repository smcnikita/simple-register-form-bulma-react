import { showError } from '../utils/error';
import type { IForm } from '../types';

interface IProps {
  form: IForm;
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
  checkValidForm: () => Promise<boolean>;
}

const useHandleSubmit = (props: IProps) => {
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    props.setForm((prev) => ({ ...prev, isShowErrors: true }));

    try {
      const isValud = await props.checkValidForm();
      if (isValud) {
        const data = `email: ${props.form.email}, password: ${props.form.password}, phone: ${props.form.notFormatNumber}. Подробности в консоле`;
        console.log({
          email: props.form.email,
          password: props.form.password,
          repeatPassword: props.form.repeatPassword,
          phone: props.form.phone,
          userInputPhone: props.form.userInputPhone,
          formatNumber: props.form.formatNumber,
          notFormatNumber: props.form.notFormatNumber,
        });

        alert(`Успех, ${data}`);
      }
    } catch (error) {
      showError();
    }
  };

  return { handleSubmit };
};

export default useHandleSubmit;
