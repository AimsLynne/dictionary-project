import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary📖</header>
        <main>
          <Dictionary defaultKeyword="library" />
        </main>
      </div>
      <footer className="App-footer">
        <small>
          This project was coded by Amy Brown and is{" "}
          <a
            href="https://github.com/AimsLynne/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/statuesque-praline-2886a8/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </small>
      </footer>
    </div>
  );
}
