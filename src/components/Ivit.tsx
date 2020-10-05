import React, { useState, useEffect } from 'react';
import Intervit from "../App";
import { Star } from "@material-ui/icons";
import "./styles/Ivit.css";
import { Equalizer, Category, BubbleChart } from "@material-ui/icons";
import { topics } from "./storage/topics";
import { Animated } from "react-animated-css";
import { Resource } from "./storage/intervits";
import Youtube from "react-youtube";
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

interface Intervit {
  id: number,
  title: string,
  difficulty: number,
  topic: number,
  explanation: string[],
  resources: any[],
  examples: string[],
  video: Resource,
  filterByDifficulty: () => void,
  filterByCategory: () => void
};

const Ivit: React.FC<Intervit> = (props: Intervit) => {

  const [showBody, setShowBody] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const getDimensions = (dimension: string) => {
    let width, height;

    if (window.innerWidth > 550) {
      width = 400;
      height = 230;
    } else {
      width = 200;
      height = 100;
    }

    return dimension === 'w' ? width : height
  }

  const [opts, setOpts]: any = useState({
    height: getDimensions('h'),
    width: getDimensions('w'),
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      let newSize;
      newSize = { ...opts };
      newSize.width = getDimensions('w');
      newSize.height = getDimensions('h');
      setOpts(newSize)
    });
  }, [setOpts, opts]);

  const getDifficulty = (diff: number): any[] => {
    let difficulty = [];
    while (diff !== 0) {
      difficulty.push(<Star key={diff} style={{ color: "#eecf6d", fontSize: 12 }} />)
      diff--;
    }
    return difficulty;
  };

  const setFilter = (props: Intervit) => {
    props.filterByDifficulty();
  }

  const filterCategory = (props: Intervit) => {
    props.filterByCategory();
  }

  const getLogo = (type: number) => {
    switch (type) {
      case 1:
        return <span className="js">JS</span>
      case 2:
        return <BubbleChart style={{ color: "#eecf6d" }} />
      case 3:
        return <Category style={{ color: "#eecf6d" }} />
      case 4:
        return <Equalizer style={{ color: "#eecf6d" }} />
    }
  }

  const getName = (selectedTopic: number) => {
    const current = topics.filter(topic => topic.value === selectedTopic);
    return current[0].label;
  };

  const openCardHandler = () => {
    setScroll(!scroll);
    setShowBody(!showBody);

    const title = props.title.replace(/[?\s]/gi, '-').toLowerCase();
    const selectedDiv = document.getElementById(title);

    if (selectedDiv && !scroll) selectedDiv.scrollIntoView();
  };

  const pauseVideo = (e: any) => {
    e.target.pauseVideo();
  }

  const setId = (title: string) => {
    title = title.replace(/[?\s]/gi, '-').toLowerCase();
    return title;
  };

  const cardBody = showBody ? <div className="card-body animated fadeIn" onClick={openCardHandler}>
    <Youtube className="youtube-vid" videoId={props.video.url} opts={opts} onReady={pauseVideo} />
    <div className="explanation">
      <span>
        {props.explanation.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </span>
      <span>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Resources:</p>
        {props.resources.map((resource, index) => <p key={index}><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a></p>)}
      </span>
    </div>
  </div> : ""

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div id={setId(props.title)} className="card-wrapper">
        <div className="card-header">
          <div className="card-header-left">
            <Tooltip
              title={`Difficulty: ${props.difficulty}. Click here to see all Level ${props.difficulty} for ${getName(props.topic)}.`}
              position="bottom"
              trigger="mouseenter"
              arrow={true}
              inertia={true}
            >
              <span onClick={() => setFilter(props)} style={{ width: "60px", margin: "5px", display: "flex" }}>{getDifficulty(props.difficulty)}</span>
            </Tooltip>
            <h4 onClick={openCardHandler}>{props.title}</h4>
          </div>
          <Tooltip
            title={`Click here to see all Intervits for ${getName(props.topic)}`}
            position="top"
            trigger="mouseenter"
            arrow={true}
            inertia={true}
          >
            <div className="card-header-right" onClick={() => filterCategory(props)}>
              {getLogo(props.topic)}
            </div>
          </Tooltip>
        </div>
        {cardBody}
      </div>
    </Animated>
  );
}

export default Ivit;