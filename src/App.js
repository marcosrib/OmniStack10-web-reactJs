import React, { useEffect, useState } from 'react';
import api from './services/api';
import "./global.css"
import "./App.css"
import "./Sidebar.css"
import "./Main.css"

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

 
  useEffect(() => {
    async function loadData() {
      const res = await api.get('/devs');
      setDevs(res.data);
    }
    loadData();
  }, [])

  async function handleAddDev(data) {
   
    const res = await api.post('/devs', data)
    setDevs([...devs, res.data])


}

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem dev={dev} />
          ))}

        </ul>
      </main>
    </div >
  );
}

export default App;
