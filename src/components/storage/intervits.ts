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
    JAVASCRIPT = 1,
    OOP = 2 ,
    DATA_STUCTURE = 3,
    ALGORITHMS = 4,
    ALL = 5
  }
  
  
  export const ALL_INTERVITS = [
    {
      id: 1,
      title: "What is type coercion ?",
      difficulty: 3,
      topic: 1,
      explanation: "this is fizzbuz",
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
      title: "This is OOP",
      difficulty: 2,
      topic: 2,
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
    }
  ];
  
  export const fetchSelectedVits = (topic: Topic) => {
    if(topic === 5) {
      return ALL_INTERVITS;
    }
    const results = ALL_INTERVITS.filter((intervit) => intervit.topic === topic);    
    return results;
  };
  