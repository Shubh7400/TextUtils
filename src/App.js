import Navbar from './components/Navbar';
import './App.css';
import TextInputs from './components/TextInputs';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar title="TextUtils" aboutText="About us"/>
     <About/>
   <TextInputs heading ='Enter Text Here To Convertion'/>
   <Footer/>
   </>
  );
}

export default App;
