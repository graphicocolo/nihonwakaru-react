import logo from './logo.svg';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div>
      <Article
        title={'タイトル1'}
        content='今日のトピックスは props のデータの受け渡しについて。'
        order={3}
        isPublished={true}
        // authorName={authorName}
        // updateAt={now}
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
