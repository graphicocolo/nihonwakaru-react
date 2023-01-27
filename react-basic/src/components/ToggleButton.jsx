import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log('Current state is', open)
    if (open) {
      console.log('Subscribe detabase...')
    }
    // クリーンアップ関数
    // この中でデータベース購読解除を行ったりする
    // 再レンダリングが実行される直前に必ず実行される仕組み
    return () => {
      console.log('Unsubscribe database!')
    }
  })

  return (
    <div>
      <p>トグル</p>
      <button onClick={toggle}>
        {open ? 'OPEN' : 'CLOSE'}
      </button>
    </div>
  );
};

export default ToggleButton;