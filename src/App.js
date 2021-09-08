import "./App.css";
import addNotification from "react-push-notification";

function App() {
  const onClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      native: true, // when using native, your OS will handle theming.
    });
  };

  return (
    <div className="App">
      <button onClick={onClick}>Trigger notification</button>
      <header className="App-header">
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
