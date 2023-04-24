import './App.css';
import Buttons from './components/Buttons'
import CustomModal from './components/CustomModal';
import Input from './components/Input';
import Modal from './components/Modal';
import Selects from './components/Selects';
function App() {
  return (
    <>
      <Buttons />
      <Input />
      <Modal />
      <Selects />
      
      <CustomModal/>
    </>
  );
}

export default App;
