import React, { useState, useEffect } from 'react';
import "./styles.css";
import Navbar from "./components/Navbar";
import { Animated } from "react-animated-css";
import Ivit from "./components/Ivit";
import { Cancel } from "@material-ui/icons";
import { fetchSelectedVits, Topic } from "./components/storage/intervits";
import { topics } from "./components/storage/topics";

interface Intervits {
  id:number,
  title:string,
  difficulty:number,
  topic:number,
  explanation:string,
  resources:object[],
  examples:string[]
}

interface Topics {
  value:number,
  label:string
}

function App(): JSX.Element {

  const [selectedIvits, setSelectedIvits] = useState<Intervits[]>([]);
  const [filters, setFilters] = useState<Topics[]>([]);
  const [openDropdown, setDropdown] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("Filter intervits");

  useEffect(()=> {
    setFilters(topics);
    setSelectedIvits(fetchSelectedVits(Topic.ALL));
  },[]);

  const handleFilter = () => {
    setDropdown(!openDropdown);
  }

  const handleFilterOption = (e:Topics) => {
    const selectedFilter:number = e.value;
    setSelectedIvits(fetchSelectedVits(selectedFilter));
    setFilter(e.label);
    setDropdown(!openDropdown);
  }

  const handleClose = () => {
    setDropdown(false);
    setFilter("Filter intervits");
    setSelectedIvits(fetchSelectedVits(Topic.ALL));
  };

  const setFilterDifficulty = (props:Intervits) => {
    console.log("in parent, show me all with:", props.topic, props.difficulty)
  }

  const showDropdown = openDropdown ? <div className="dropdown-options">
    {filters.map((filter:Topics,index:number)=> <span onClick={()=>handleFilterOption(filter)} key={index}>{filter.label}</span>)}
    </div> : "" 

  const showClose = filter !== "Filter intervits" ? <span><Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}><Cancel style={{color:"white"}}/></Animated></span>: ""

  return (
    <div className="App">
      <Navbar/>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="header-main">
          <h2>
            Have a question? Here's an{" "}
            <span style={{ textDecoration: "underline" }}>answer</span>.
          </h2>
          <p>
            A collection of the most frequently asked questions in technical
            interviews.
          </p>
        </div>
      </Animated>
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <span className="close" onClick={handleClose}>{showClose}</span>
          <div className="selected-option" onClick={handleFilter}>{filter}</div>
          {showDropdown}
        </div>
      </div>
      <div className="cards-wrapper">
        {selectedIvits.map((currentIvit:Intervits, index:number, setFilter:any )=> 
        <Ivit 
        key={index}
        id={currentIvit.id}
        title={currentIvit.title}
        difficulty={currentIvit.difficulty}
        topic={currentIvit.topic}
        explanation={currentIvit.explanation}
        resources={currentIvit.resources}
        examples={currentIvit.examples}
        filterByDifficulty={()=>setFilterDifficulty(currentIvit)}
        />)}
      </div>
    </div>
  );
}

export default App;