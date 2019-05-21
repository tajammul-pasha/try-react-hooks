import React, { Fragment, useState, useEffect } from "react";

const FirstHook = () => {
  const [name, changeName] = useState("Taj");
  const [width, setWidth] = useState(window.innerWidth);

  const handleNameChange = e => {
    changeName(e.target.value);
  };

  useEffect(() => {
    const handleSize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });

  return (
    <Fragment>
      <p>First React Hook example</p>
      <input value={name} onChange={handleNameChange} />
      <p>My name is {name}</p>
      <p>Window width is {width}</p>
    </Fragment>
  );
};

export default FirstHook;
