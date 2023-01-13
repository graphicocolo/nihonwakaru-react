import { useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(prevState => !prevState)
  }

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