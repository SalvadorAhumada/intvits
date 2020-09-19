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
  const [showClose, setShowClose] = useState<boolean>(false);

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
    setShowClose(true);
    setFilter(e.label);
    setDropdown(!openDropdown);
  }

  const handleClose = () => {
    setShowClose(false);
    setDropdown(false);
    setFilter("Filter intervits");
    setSelectedIvits(fetchSelectedVits(Topic.ALL));
  };

  const setFilterDifficulty = (props:Intervits) => {
    const current = topics.filter(topic => topic.value === props.topic);
    setShowClose(true);
    setFilter(current[0].label);
    const difficultyFiltered = selectedIvits.filter(ivit => ivit.difficulty === props.difficulty && ivit.topic === props.topic);
    setSelectedIvits(difficultyFiltered);
  }

  const setCategoryFilter = (props:Intervits) => {
    const current = topics.filter(topic => topic.value === props.topic);
    setShowClose(true);
    setFilter(current[0].label);
    setSelectedIvits(fetchSelectedVits(current[0].value));
  }

  const showDropdown = openDropdown ? <div className="dropdown-options">
    {filters.map((filter:Topics,index:number)=> <span onClick={()=>handleFilterOption(filter)} key={index}>{filter.label}</span>)}
    </div>: "" 

  const showTextFilter = <Animated animationIn="fadeIn" animationOut="fadeOut" animateOnMount={false} isVisible={showClose}><Cancel style={{color:"#4b7d63"}}/></Animated>;

  return (
    <div className="App">
      <Navbar/>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="header-main">
          <h2>
            <span className="title-1">Have a question?</span><br/>
            <span className="title-2">We have the answer</span>.
          </h2>
          <p>
            A collection of the most frequently asked questions in technical
            interviews.
          </p>
        </div>
      </Animated>
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <span className="close" onClick={handleClose}>
            {showTextFilter}
          </span>
          <div className="selected-option" style={{backgroundColor: openDropdown ? "#4B7D63" : "#70A288"}} onClick={handleFilter}>{filter}</div>
          {showDropdown}
        </div>
      </div>
      <div className="cards-wrapper">
        {selectedIvits.map((currentIvit:Intervits, index:number )=> 
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
        filterByCategory={()=>setCategoryFilter(currentIvit)}
        />)}
      </div>
    </div>
  );
}

export default App;