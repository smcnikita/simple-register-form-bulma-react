import type { ValidateError, ValidateFieldsError, Values } from 'async-validator';
import type { IError, IForm } from '../types';
import Schema from 'async-validator';
import useRules from './useRules';

interface IProps {
  form: IForm;
  setErrors: React.Dispatch<React.SetStateAction<IError>>;
}

const useValidator = (props: IProps) => {
  const rules = useRules({ form: props.form });
  const validator = new Schema(rules);

  const checkValidForm = async () => {
    let isValid = true;

    props.setErrors({ email: '', password: '', repeatPassword: '', phone: '' });

    await validator.validate(
      props.form,
      (errors: ValidateError[] | null, fields: Values | ValidateFieldsError) => {
        if (errors) {
          isValid = false;

          if (fields.email) {
            props.setErrors((prev) => ({ ...prev, email: fields.email[0].message }));
          }

          if (fields.password) {
            props.setErrors((prev) => ({ ...prev, password: fields.password[0].message }));
          }

          if (fields.repeatPassword) {
            props.setErrors((prev) => ({
              ...prev,
              repeatPassword: fields.repeatPassword[0].message,
            }));
          }

          if (fields.phone) {
            props.setErrors((prev) => ({ ...prev, phone: fields.phone[0].message }));
          }
        }
      }
    );

    return isValid;
  };

  return { checkValidForm };
};

export default useValidator;
