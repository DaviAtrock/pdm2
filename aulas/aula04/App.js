import Splash from './screens/splash'
import Login from './screens/login'
import { useState, useEffect } from 'react'
import Home from './screens/Home'

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(()=>{
    setTimeout(() => setExibeSplash(false),3000);
  }, []);

  return exibeSplash ? <Splash />: <Home />
};

export default App;