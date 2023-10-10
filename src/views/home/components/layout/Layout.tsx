interface IProps {
  children: React.ReactNode;
  cb: (event: React.SyntheticEvent<Element, Event>) => Promise<void>;
}

const Layout = (props: IProps) => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body is-justify-content-center is-align-items-center">
        <form
          className="columns is-flex is-flex-direction-column box"
          onSubmit={props.cb}
          noValidate
        >
          {props.children}
        </form>
      </div>
    </div>
  );
};

export default Layout;
