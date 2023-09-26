import Demo2 from "./Demo2";

import { useState } from "react";

function Demo1() {
  const [nom, setNom] = useState<string>("Titi");
  const handleClick = () => {
    setNom("Tata");
  };
  return (
    <>
      <div className="superclasse">Je suis dans démo 1</div>
      <Demo2 nom={nom}/>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Demo1;
