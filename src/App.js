import './App.css';
import Calculator from './components/calculator/calculator';

function App() {
  return (
    <div className='flex px-4 justify-center items-center min-h-screen bg-gradient-to-b from-[#141E30] to-[#243B55]'>
      <div className='m-auto flex flex-grow max-w-7xl '>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
