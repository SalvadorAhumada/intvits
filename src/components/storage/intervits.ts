export type Intervit = {
    id: number,
    title: string,
    difficulty:number,
    topic:number,
    explanation:string,
    resources:object[],
    examples:string[],
    video:Resource
  };

  export enum Topic {
    ALL,
    JAVASCRIPT,
    OOP,
    DATA_STUCTURE,
    ALGORITHMS,
  }

  export interface Resource {
    title:string,
    url:string
  }
  
  export const ALL_INTERVITS = [
    {
      id: 1,
      title: "Type coercion",
      difficulty: 3,
      topic: 1,
      explanation: "Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion",
      resources: [
        {
          title: "JavaScript type coercion explained",
          url:
            "https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/"
        }
      ],
      examples: ['1 + "3"', "[] + 1", '5 - "2"'],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 2,
      title: "FizzBuzz",
      difficulty: 2,
      topic: 3,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 3,
      title: "Repeating number in array",
      difficulty: 2,
      topic: 3,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 4,
      title: "Reversing a LinkedList",
      difficulty: 5,
      topic: 4,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 5,
      title: '"this" in Javascript',
      difficulty: 4,
      topic: 1,
      explanation: "In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.",
      resources: [
        {
          title:"test", 
          url:"https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8"
        },
        {
          title:"test2",
          url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
        }
      ],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "eOI9GzMfd24"
      }
    },
    {
      id: 6,
      title: 'Basics of OOP?',
      difficulty: 1,
      topic: 2,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 7,
      title: 'Changing the value of two variables without using a third varaiable',
      difficulty: 2,
      topic: 4,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 8,
      title: 'Interfaces',
      difficulty: 2,
      topic: 4,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 9,
      title: 'Arrays length',
      difficulty: 1,
      topic: 1,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 10,
      title: 'Insertion sort',
      difficulty: 1,
      topic: 4,
      explanation: " interchange",
      resources: [{}],
      examples:[],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
    {
      id: 11,
      title: 'Extract Class refactoring',
      difficulty: 1,
      topic: 3,
      explanation: " interchange",
      resources: [{}],
      examples:["https://refactoring.guru/es/extract-class"],
      video:
      {
        title:"Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
        url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
      }
    },
  ];
  
  export const fetchSelectedVits = (topic: Topic) => {
    let results;
    if(topic === 0) {
      results = ALL_INTERVITS;
    } else {
      results = ALL_INTERVITS.filter((intervit) => intervit.topic === topic);
    }

    const orderedResults = results.sort((a, b)=> {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return orderedResults;
  };
  