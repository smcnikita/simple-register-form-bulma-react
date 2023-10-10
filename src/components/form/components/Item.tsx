import { Column } from '@/components/column';
import classNames from 'classnames';

interface IProps {
  label: string;
  error: string;
  isShowError: boolean;
  isGlobalShowError: boolean;
  onBlur: () => void;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Item = (props: IProps) => {
  return (
    <>
      <Column>
        <label>{props.label}</label>
        <input
          className={classNames('input', { 'is-danger': props.isShowError })}
          onBlur={props.onBlur}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={props.type}
          value={props.value}
        />
        {props.isGlobalShowError && props.error && <p className="help is-danger">{props.error}</p>}
      </Column>
    </>
  );
};

export default Item;
