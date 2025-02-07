import { FaFilter } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { SiTodoist } from 'react-icons/si';
import './App.css';
import Button from './components/@base/Button/Button';

function App() {
  return (
    <>
      <header className="p-4 flex justify-between items-center bg-[#6200ea]">
        <div className="flex items-center gap-4">
          <SiTodoist size="36px" color="white" />
          <h1 className="text-white font-bold text-xl">ToDoist</h1>
        </div>
        <div className="flex gap-4">
          <Button className="w-9" icon={<FaPlus color="#6200ea" />} />
          <Button className="w-9" icon={<FaFilter color="#6200ea" />} />
        </div>
      </header>
    </>
  );
}

export default App;
