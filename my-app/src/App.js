import logo from './logo.svg';
import './App.css';

/** This is the main file for you to develop your app!
 * Everything inside the App return statement will be rendered to the DOM.
*/

function App() {

  /** If you want to create a component, create it here and call it inside the return statement.
   * For example, if you want to create a component called "MyComponent", you can create it here and call it "MyComponent":
   * const MyComponent = () => {
   *  return <div>MyComponent</div>
   * }
   * Then, in the return statement, you can call it like this:
   * <MyComponent />
   * Learn more about components: https://reactjs.org/docs/components-and-props.html
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
