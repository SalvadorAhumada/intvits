export type Intervit = {
    id: number,
    title: string,
    difficulty:number,
    topic:number,
    explanation:string,
    resources:object[],
    examples:string[]
  };

  export enum Topic {
    ALL,
    JAVASCRIPT,
    OOP,
    DATA_STUCTURE,
    ALGORITHMS,
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
        },
        {
          title:
            "Avoiding JavaScript Type Conversion Issues - How Type Coercion Works",
          url: "https://www.youtube.com/watch?v=XWNq7XJuwoo"
        }
      ],
      examples: ['1 + "3"', "[] + 1", '5 - "2"']
    },
    {
      id: 2,
      title: "FizzBuzz",
      difficulty: 2,
      topic: 3,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 3,
      title: "Repeating number in array",
      difficulty: 2,
      topic: 3,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 4,
      title: "Reversing a LinkedList",
      difficulty: 5,
      topic: 4,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 5,
      title: '"this" in Javascript',
      difficulty: 4,
      topic: 1,
      explanation: "This is interchange",
      resources: [
        {
          title:"test", 
          url:"https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8"
        }
      ],
      examples:[]
    },
    {
      id: 6,
      title: 'Basics of OOP?',
      difficulty: 1,
      topic: 2,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 7,
      title: 'Changing the value of two variables without using a third varaiable',
      difficulty: 2,
      topic: 4,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 8,
      title: 'Interfaces',
      difficulty: 2,
      topic: 4,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 9,
      title: 'Arrays length',
      difficulty: 1,
      topic: 1,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 10,
      title: 'Insertion sort',
      difficulty: 1,
      topic: 4,
      explanation: "This is interchange",
      resources: [{}],
      examples:[]
    },
    {
      id: 11,
      title: 'Extract Class refactoring',
      difficulty: 1,
      topic: 3,
      explanation: "This is interchange",
      resources: [{}],
      examples:["https://refactoring.guru/es/extract-class"]
    }
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
  