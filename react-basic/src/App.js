// import logo from './logo.svg';
import './App.css';
import {Article} from './components';

function App() {
  return (
    <div>
      <Article 
        title={'import と export'}
        content={'今日のトピックスです。名前つきimport・export、default import・exportの実装ができたでしょうか？'}
      />
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
