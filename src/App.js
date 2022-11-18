import Navbar from './components/Navbar';
import './App.css';
import TextInputs from './components/TextInputs';
import About from './components/About';

function App() {
  return (
   <>
     <Navbar title="NavBar" aboutText="About us"/>
     <About/>
   <TextInputs 
   heading ='Enter Text Here To Convertion'
   />
   
   </>
  );
}

export default App;
