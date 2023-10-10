import type { IForm } from '../types';
import { showError } from '../utils/error';

interface IProps {
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
  checkValidForm: () => Promise<boolean>;
}

const useBlur = (props: IProps) => {
  const onBlur = async () => {
    await props.checkValidForm().catch(() => {
      showError();
    });
    props.setForm((prev) => ({ ...prev, isShowErrors: true }));
  };

  return { onBlur };
};

export default useBlur;
