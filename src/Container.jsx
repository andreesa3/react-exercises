import { useState } from "react";

const Container = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(c => !c);
  }

  return (
    <>
      <div className="app bg-white border border-red-700 p-10 m-5">
        <div className="container-title cursor-pointer" onClick={handleCollapse}>{title}</div>
        {
          collapse && <div className="container-content">{children}</div>
        }
      </div>
    </>
  )
}

export default Container;