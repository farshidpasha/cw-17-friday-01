import { IoCloseSharp } from 'react-icons/io5';

type propsType = {
  content: React.ReactNode;
  title: string;
  closeHandle: () => void;
};

export default function Modal(props: propsType) {
  const { content, title, closeHandle } = props;
  return (
    <>
      <div className="overlay bg-black/50 w-full h-full fixed top-0 left-0" onClick={closeHandle}></div>
      <div className="bg-white rounded-lg shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2">
        <div className="p-4 flex justify-between shadow-xl">
          <h4>{title}</h4>
          <IoCloseSharp onClick={closeHandle} />
        </div>
        <div className="p-6">{content}</div>
      </div>
    </>
  );
}
