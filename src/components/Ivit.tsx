import React, { useState } from 'react';
import Intervit from "../App";
import { Star } from "@material-ui/icons";
import "./styles/Ivit.css";
import { Equalizer, Category, BubbleChart } from "@material-ui/icons";
import { topics } from "./storage/topics";
import { Animated } from "react-animated-css";
import { Resource } from "./storage/intervits";
import Youtube from "react-youtube";

interface Intervit {
  id:number,
  title:string,
  difficulty:number,
  topic:number,
  explanation:string[],
  resources:object[],
  examples:string[],
  video:Resource,
  filterByDifficulty:()=>void,
  filterByCategory:()=>void
};

const Ivit:React.FC<Intervit> = (props:Intervit)=> {

  const [showBody, setShowBody] = useState<boolean>(false);
  const [scroll, setScroll]     = useState<boolean>(false);

  const opts : object = {
    height: '195',
    width: '320',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const getDifficulty = (diff:number) : any[] => {
    let difficulty = [];
    while(diff !== 0) {
      difficulty.push(<Star key={diff} style={{color:"#eecf6d", fontSize:12}}/>)
      diff--;
    }
    return difficulty;
  };
  
  const setFilter = (props:Intervit) => {
    props.filterByDifficulty();
  }
  
  const filterCategory = (props:Intervit) => {
    props.filterByCategory();
  }
  
  const getLogo = (type:number) => {
    switch(type) {
      case 1:
        return <span className="js">JS</span>
      case 2:
        return <BubbleChart style={{color:"#eecf6d"}}/>
      case 3:
        return <Category style={{color:"#eecf6d"}}/>
      case 4:
        return <Equalizer style={{color:"#eecf6d"}}/>
    }
  }
  
  const getName = (selectedTopic:number) => {
    const current = topics.filter(topic => topic.value === selectedTopic);
    return current[0].label;
  };
  
  const openCardHandler = () => {
    setScroll(!scroll);
    setShowBody(!showBody);

    const title = props.title.replace(/[?\s]/gi, '-').toLowerCase();
    const selectedDiv = document.getElementById(title);

    if(selectedDiv && !scroll) {
      selectedDiv.scrollIntoView();
    }
  };

  const pauseVideo = (e:any) => {
    e.target.pauseVideo();
  }

  const setId = (title:string) => {
    title = title.replace(/[?\s]/gi, '-').toLowerCase();
    return title;
  };
  
  const cardBody = showBody ? <div className="card-body animated fadeIn" onClick={openCardHandler}>
  <Youtube className="youtube-vid" videoId={props.video.url} opts={opts} onReady={pauseVideo} />
  <div className="explanation">
    {props.explanation.map((paragraph,index) => <p key={index}>{paragraph}</p>)}
  </div>
  </div> : ""

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
    <div id={setId(props.title)} className="card-wrapper">
      <div className="card-header">
        <div className="card-header-left" onClick={openCardHandler}> 
          <span onClick={()=>setFilter(props)} style={{width:"60px", margin:"5px", display:"flex"}} title={`Difficulty: ${props.difficulty}. Click here to see all Level ${props.difficulty} for ${getName(props.topic)}.`}>{getDifficulty(props.difficulty)}</span>
            <h3>{props.title}</h3>
        </div>
        <div className="card-header-right" title={`Click here to see all Intervits for ${getName(props.topic)}`} onClick={()=>filterCategory(props)}>
          {getLogo(props.topic)}
        </div>
      </div>
      {cardBody}
    </div>
    </Animated>
  );
}

export default Ivit;