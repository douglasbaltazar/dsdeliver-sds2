import { useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  useEffect(() => {
    console.log('componente iniciou')
  }, [])
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
