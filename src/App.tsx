import React, { useState, useEffect } from 'react';
import "./styles.css";
import Navbar from "./components/Navbar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Animated } from "react-animated-css";
import Ivit from "./components/Ivit";
import { Cancel } from "@material-ui/icons";
import { fetchSelectedVits, Topic } from "./components/storage/intervits";

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
  
  const [filter, setFilter] = useState<number>(0);
  const [filterName, setFilterName] = useState<string>("");
  const [selectedIvits, setSelectedIvits] = useState<Intervits[]>([]);
  const [options, setOptions] = useState<string[]>(["Javascript" ,"OOP" ,"Data Structure" ,"Algohritms" ]);
  const [defaultOption] = useState<string>("Filter by topic");

  useEffect(()=> {
    const fetchedIvits = fetchSelectedVits(Topic.ALL)
    setSelectedIvits(fetchedIvits);
  });


   const ivit = selectedIvits.map((vit:any) => (
     <Ivit key={vit.id} selectedIvit={vit} />
   ));

  const closeDropdown = () => {
    setFilter(0);
    setFilterName("");
  };

   const close = filter ? (
     <Cancel
       onClick={closeDropdown}
       style={{ color: "white", cursor: "pointer" }}
     />
   ) : (
     ""
   );

  return (
    <div className="App">
      <Navbar/>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="header-main">
          <h2>
            Got a question? We have an{" "}
            <span style={{ textDecoration: "underline" }}>answer</span>.
          </h2>
          <p>
            A collection of the most frequently asked questions in technical
            interviews.
          </p>
        </div>
      </Animated>
      <div className="dropdown-wrapper">
        <span className="close-btn">{close}</span>
        {/*<Dropdown options={options} onChange={setNewFilter}/>*/}
        {/*{options.map((option)=> <p>{option.value}</p>)}*/}
      </div>
      <div className="cards-wrapper">{ivit}</div>
    </div>
  );
}

export default App;
