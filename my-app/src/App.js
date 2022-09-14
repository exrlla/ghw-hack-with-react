// import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextComponent.js';
import LinksData from './data/linksdata.js';

function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <div
        className="text-component"> 
        {LinksData.links.map((segment) => (
<TextComponent 
key={segment.name}
name={segment.name}
repo={segment.repo}
youtube={segment.youtube}
slides={segment.slides}
/>
        ))}
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
