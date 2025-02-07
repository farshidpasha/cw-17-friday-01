type propsType = {
  icon?: any;
  text?: string;
  className?: string;
  //   onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: propsType) {
  const { icon, text, className, ...others } = props;
  return (
    <button
      className={`h-9 flex justify-center items-center bg-white rounded-sm ${className ? className : ''}`}
      {...others}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
