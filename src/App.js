import "./App.css";

import SearchEngine from "./SearchEngine";
import CurrentTime from "./CurrentTime";
import CurrentData from "./CurrentData";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <SearchEngine />
          </div>
          <div className="col-2">
            <CurrentTime />
          </div>
        </div>
      </div>
      <CurrentData />

      <small>
        <a
          rel="noreferrer"
          className="link"
          href="https://codesandbox.io/s/elated-einstein-4s8viw?file=/src/App.js:562-609"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        by Sarolta Hegyi
      </small>
    </div>
  );
}
