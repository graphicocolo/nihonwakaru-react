import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(prevState => prevState + 1)
  }
  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  // レンダリングのたび毎回実行される
  useEffect(() => {
    console.log('Current count is...', count)
  })
  
  // 初回レンダリング後のみ実行される
  // 再実行されることはないが初回のみ必ず実行される
  // useEffect(() => {
  //   console.log('Current count is...', count)
  // }, [])
  
  // trigger が変更されるたび実行される
  // useEffect(() => {
  //   console.log('Current count is...', count)
  // }, [trigger])
  
  // triggaer1 か triggaer2 どちらかが変更されるたび実行される
  // useEffect(() => {
  //   console.log('Current count is...', count)
  // }, [trigger1, trigger2])

  return (
    <div>
      <p>正常動作のカウンター<br/>現在のカウント数：{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default Counter;