interface IProps {
  children: React.ReactNode;
}

const Column = (props: IProps) => {
  return <div className="column">{props.children}</div>;
};

export default Column;
