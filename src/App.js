import './App.css';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const addToList = time => {
    if (list.length === 0) {
      setList([time])
    } else {
      const newList = [...list, time];
      setList(newList);
    }
  }

  return (
    <div className="container-fluid">
      <div className='row'>
        <Main addToList={addToList}></Main>
        <Aside list={list}></Aside>
      </div>
    </div >
  );
}

export default App;

