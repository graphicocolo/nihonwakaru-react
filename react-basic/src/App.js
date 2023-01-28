// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {Article, TextInput, Counter, BadCounter, ToggleButton} from './components';

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('deatiger')
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setName(data.name)
    })
    .catch(error => {
      console.log(error)
    })
  }, [id])

  return (
    <div>
      <p>{id}の、GitHub 上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
      <Article 
        title={'import と export'}
        content={'今日のトピックスです。名前つきimport・export、default import・exportの実装ができたでしょうか？'}
      />
      <TextInput />
      <Counter />
      <BadCounter />
      <ToggleButton />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>環境構築しました。</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
