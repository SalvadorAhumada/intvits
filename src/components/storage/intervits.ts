export type Intervit = {
    id: number,
    title: string,
    difficulty:number,
    topic:number,
    explanation:string,
    resources:string[],
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
      title: "What is type coercion ?",
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
      resources: [],
      examples:[]
    },
    {
      id: 3,
      title: "How do you find a repeated number in an array ?",
      difficulty: 2,
      topic: 3,
      explanation: "This is interchange",
      resources: [],
      examples:[]
    },
    {
      id: 4,
      title: "How do you reverse a Linked List ?",
      difficulty: 2,
      topic: 4,
      explanation: "This is interchange",
      resources: [],
      examples:[]
    },
    {
      id: 5,
      title: 'How "This" works in Javascript ?',
      difficulty: 4,
      topic: 1,
      explanation: "This is interchange",
      resources: [],
      examples:[]
    },
    {
      id: 6,
      title: 'What are the basics of OOP?',
      difficulty: 1,
      topic: 2,
      explanation: "This is interchange",
      resources: [],
      examples:[]
    },
    {
      id: 7,
      title: 'How to change the value of two variables withouth using a third varaiable?',
      difficulty: 2,
      topic: 4,
      explanation: "This is interchange",
      resources: [],
      examples:[]
    }
  ];
  
  export const fetchSelectedVits = (topic: Topic) => {
    if(topic === 0) return ALL_INTERVITS;

    const results = ALL_INTERVITS.filter((intervit) => intervit.topic === topic);    
    return results;
  };
  