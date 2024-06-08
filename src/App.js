import './App.css';
import CalculateSalary from './components/CalculateSalary';
import YourSalary from './components/YourSalary';


function App() {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-1/2 px-6 py-4" style={{ width: '680px', height: '616px', top: '142px', left: '128px', gap: '0px', opacity: '0px', background: '#FAFAFA',border: '1px solid #E0E0E0' }}>
        <CalculateSalary/>
      </div>

      <div className="w-1/2 pl-0  ml-6" style={{ width: '480px', height: '616px', top: '142px', left: '832px', gap: '0px', opacity: '0px', border: '1px solid #E0E0E0' }}>
        <YourSalary/>
      </div>
    </div>
  );
}

export default App;
