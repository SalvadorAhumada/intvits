export type Intervit = {
    id: number,
    title: string,
    difficulty:number,
    topic:number,
    explanation:string[],
    resources:object[],
    examples:string[],
    video:Resource
  };

  export enum Topic {
    ALL,
    JAVASCRIPT,
    OOP,
    DATA_STRUCTURE,
    ALGORITHMS,
  }

  export interface Resource {
    title:string,
    url:string
  }
  
  export const ALL_INTERVITS = [
    {
      id: 1,
      title: "Do you know what type coercion is in Javascript?",
      difficulty: 3,
      topic: 1,
      explanation: ["Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion"],
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
        url: "XWNq7XJuwoo"
      }
    },
    {
      id: 2,
      title: "Write a Fizzbuzz algorithm",
      difficulty: 2,
      topic: 3,
      explanation: ['The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can\'t seem to program their way out of a wet paper bag.',
    'We can\'t understand why so many people "fail" the Fizz-Buzz test unless we understand why it is "hard" (for them). Understanding that, we may be able to evaluate the usefulness of this tool, and others, as filtering tools for candidates.'],
      resources: [{title:"Fizzbuzz test",url:"https://wiki.c2.com/?FizzBuzzTest"}],
      examples:[],
      video:
      {
        title:"FizzBuzz: One Simple Interview Question",
        url: "QPZ0pIK_wsc"
      }
    },
    {
      id: 3,
      title: "How do you find a duplicate number in an array?",
      difficulty: 2,
      topic: 3,
      explanation: ["Given an array of n elements which contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and using only constant memory space.","Approach:The elements in the array is from 0 to n-1 and all of them are positive. So to find out the duplicate elements, a HashMap is required, but the question is to solve the problem in constant space. There is a catch, the array is of length n and the elements are from 0 to n-1 (n elements). The array can be used as a HashMap."],
      resources: [{title:"Find duplicates in O(n) time and O(1) extra space | Set 1",url:"https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/"}],
      examples:[],
      video:
      {
        title:"LeetCode 442. Find All Duplicates in an Array (Solution Explained)",
        url: "aMsSF1Il3IY"
      }
    },
    {
      id: 4,
      title: "How do you reverse a linked list?",
      difficulty: 3,
      topic: 4,
      explanation: ["LinkedList is a data structure which stores the data in a linear way. Though not in a contiguous way.","Every element of a LinkedList contains a data part and an address to the next element of the LinkedList.","LinkedList elements are popularly known as nodes."],
      resources: [{title:"Reverse a Linked List",url:"https://www.journaldev.com/23035/reverse-a-linked-list"}],
      examples:[],
      video:
      {
        title:"Reversing a linked list | GeeksforGeeks",
        url: "D7y_hoT_YZI"
      }
    },
    {
      id: 5,
      title: 'How does "this" works in Javascript?',
      difficulty: 4,
      topic: 1,
      explanation: ["this keyword has been a mystery for me for a long time. It is a powerful feature but requires efforts to be understood.","From a background like Java, PHP or other standard language, this is seen as an instance of the current object in the class method. Mostly, this cannot be used outside the method and such a simple approach does not create confusion.","In JavaScript the situation is different: this is the current execution context of a function. The language has 4 function invocation types:"],
      resources: [
        {
          title:'Gentle Explanation of "this" in JavaScript', 
          url:"https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/"
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
      title: 'What are the pillars of object-oriented programming?',
      difficulty: 1,
      topic: 2,
      explanation: ["There are four Pillars of Object Oriented Programming:","Abstraction","Encapsulation","Inheritance","Polymorphism","Lets try to understand each of them in a most easiest way!"],
      resources: [{title:"Four Pillars of Object Oriented Programming (OOP)",url:"https://medium.com/@hamzzza.ahmed95/four-pillars-of-object-oriented-programming-oop-e8d7822aa219"}],
      examples:[],
      video:
      {
        title:"Pillar of OOPS(Data Abstraction,Inheritance, Polymorphism, Encapsulation. )",
        url: "9pv3FpH2Wso"
      }
    },
    {
      id: 7,
      title: 'How do you swap the value of two variables with no temporal variable?',
      difficulty: 2,
      topic: 4,
      explanation: [""],
      resources: [{}],
      examples:[],
      video:
      {
        title:"Program to Swap Two Numbers With or Without Third Variable | TalentSprint",
        url: "s-tlS9bsrVc"
      }
    },
    {
      id: 8,
      title: 'What is an interface?',
      difficulty: 2,
      topic: 4,
      explanation: [""],
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
      title: 'What is "Extract Class" refactoring?',
      difficulty: 2,
      topic: 2,
      explanation: ["When one class does the work of two, awkwardness results.","Instead, create a new class and place the fields and methods responsible for the relevant functionality in it."],
      resources: [{title:"Extract Class",url:"https://refactoring.guru/es/extract-class"}],
      examples:[],
      video:
      {
        title:"Extract Class",
        url: "V9tm2av-v8g"
      }
    },
    {
      id:10,
      title:'What data structures do you know?',
      difficulty:1,
      topic:3,
      explanation:["A data structure is a particular way of organizing data in a computer so that it can be used effectively.","For example, we can store a list of items having the same data-type using the array data structure."],
      resources:[{title:"Data Structures",url:"https://www.geeksforgeeks.org/data-structures/"}],
      examples:[],
      video:
      {
        title:"DATA STRUCTURES you MUST know (as a Software Developer)",
        url:"sVxBVvlnJsM"
      }
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
  