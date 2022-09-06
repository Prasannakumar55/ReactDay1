1 . What is Virtual DOM ?

    DOM stands for Doucument Object Model Its manipulates the data of the webpage.
    In DOM when the changes is happend it's rersender the hole  
    Document Because of this process DOM is slow.
    The Virtual DOM is a representation of the Original DOM.
    React update the changes in Virtual DOM first and then it  Sync with the real DOM. 
    When it's come to Virtual DOM it change the only Component
    what needed to be change inside DOM structure.  
    It's only render the Component instead of hole document.
    Virtual DOM located in memory and sync with "Real DOM" by a 
    "ReactDOM" library this process is called as Reconciliation.
    React Compares the Virtual DOM and pre-updated Virtual      
    DOM  and only update the Component from structure this   process is called diffing.
    The Algorithm behind the diffing is called Diffing Algorithm.

2 . What is SPA ?

    The SPA stands for Single Page Application. The Single Page Application dosn't 
    Need to reload the page while using and time consumption. 
    React is the Single page Application and it was used by 
    Google(maps), Facebook, Twitter, etc
    
3 . What is difference between Class Component and functional Component

    functional Component :

    A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element. There is no render method used in functional components. Hooks can be easily used in functional components to make them Stateful.

        Example :

        import React from 'react';

        const Component = () => {
        Const [name,SetName]= React.useState(‘Prasanan‘)
        return (
            <h1>name</h1>
        )
        }

        export default Component;
       

    Class Component :   
    
    A class component requires you to extend from React. Component and create a render function which returns a React element. It must have the render() method returning JSX. React lifecycle methods can be used inside class components (for example, componentDidMount).

        Example :

        import React, { Component } from 'react';

        class App extends Component {

        constructor(props){
            super(props);
            this.state = {
            data: 'Prasanna kumar'
            }
        }

4 . What does mean by state and its use in react?

    The State is an object that holds some data and when it's 
    changing  the data the Component gets rerender. 
    its not going to modify the data only it represents

    Example :

    export default Class setupTests extends Component {
        state {
            names : "prasanna kumar"
        }
    render() {
        return (
        <div>
            <h1>{this.state.names}</h1>
        </div>
        )
      }
    }

5 . What is JSX and why do we use it instead of js ?  

    JSX stands for JavaScript Syntax Extension.
    if use js file it needed to link in html file because 
    the browser cant read js with out HTML. instead of this process 
    the JSX allows to write the HTML code along with JavaScript. 

    Example :

    import React from 'react'
 
    const Demo = () => {
      return (
        <div>
          <h1>Name : Prasanna Kumar</h1> {JSX File}
          <p>Course : React</p>
        </div>
      )
    }
    
    export default Demo
    

6 . What is package.json ?
 
    The Package.json is contains library of modules in React Project. 
    it stores the data of all modules that which can be installed and 
    working in project like React-Router_dom, React-Bootstrap, React DOM, Redux Etc.