import React from "react";
import Intervit from "../App";

interface Intervit {
  id:number,
  title:string,
  difficulty:number,
  topic:number,
  explanation:string,
  resources:object[],
  examples:string[]
}

const Ivit:React.FC<Intervit> = (props:Intervit) => {
  return (
    <div className="navbar-wrapper">
      {props.title}
    </div>
  );
}

export default Ivit;