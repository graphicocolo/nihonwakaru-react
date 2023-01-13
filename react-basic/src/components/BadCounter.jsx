import { useState } from "react";

const BadCounter = () => {
  const [count, setCount] = useState(0)
  const countUp = () => {
    // setCount(prevState => prevState + 1)
    // useState の更新関数は、更新をするとなってから実際に state が更新されるまでに若干のタイムラグがある
    // いわゆる非同期で動く処理
    // setCount に値が渡されてからしばらくは、以前の値を参照していることとなる
    // なので、連打した場合、カウンターの値が正しく反映されない
    // ↓1秒待ってから setCount を実行させると、少し前の値を参照しているため、連打した場合のカウンターが正しく動作しない
    // setTimeout(() => setCount(count + 1), 1000)
    // ↓prevState を使うと、何回連打しても1秒後には正しく反映され最終的に連打した数だけカウンターに加算される
    setTimeout(() => setCount(prevState => prevState + 1), 1000)
    // setCount(count + 1)
  }
  const countDown = () => {
    // setCount(prevState => prevState - 1)
    setCount(count - 1)
  }

  return (
    <div>
      <p>動作不良のカウンター<br/>現在のカウント数：{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default BadCounter;