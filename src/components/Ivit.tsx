import React from "react";
import Intervit from "../App";
import { Star } from "@material-ui/icons";
import "./styles/Ivit.css";

interface Intervit {
  id:number,
  title:string,
  difficulty:number,
  topic:number,
  explanation:string,
  resources:object[],
  examples:string[],
  filterByDifficulty:()=>void
}

const getDifficulty = (diff:number) : any[] => {
  let difficulty = [];
  while(diff !== 0) {
    difficulty.push(<Star key={diff} style={{color:"white", fontSize:12}}/>)
    diff--;
  }
  return difficulty;
};

const setFilter = (props:Intervit) => {
  props.filterByDifficulty();
}

const Ivit:React.FC<Intervit> = (props:Intervit)=> {
  return (
    <div className="card-wrapper">
      {/*setFilter:(topic:number, difficulty:number) => void */}
      <div className="card-header">
        <div className="card-header-left">
          <span onClick={()=>setFilter(props)} style={{width:"60px", display:"flex"}} title={`Difficulty: ${props.difficulty}`}>{getDifficulty(props.difficulty)}</span>
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Ivit;