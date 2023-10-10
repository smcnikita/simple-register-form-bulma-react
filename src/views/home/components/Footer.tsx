import { Column } from '@/components/column';

const Footer = () => {
  return (
    <>
      <Column>
        <button className="button is-primary is-fullwidth" type="submit">
          Создать аккаунт
        </button>
      </Column>

      <div className="has-text-centered">
        <p>
          Нажав «Создать аккаунт», вы принимаете <a href="#">условия использования</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
