type propsType = {
  icon?: any;
  text?: string;
  className?: string;
};

export default function Button(props: propsType) {
  const { icon, text, className } = props;
  return (
    <button className={`h-9 flex justify-center items-center bg-white rounded-sm ${className ? className : ''}`}>
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
