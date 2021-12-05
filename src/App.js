import logo from './logo.svg';
import './App.css';
import {ProfilePhoto} from './ProfilePhoto';
import {FullName} from './FullName';

import {Address} from './Address';

function App() {
  return (
    <div className="App">
     <div className='container'>
        <ProfilePhoto/>
        <FullName/>
        <Address/>
      </div>
    </div>
  );
}

export default App;
