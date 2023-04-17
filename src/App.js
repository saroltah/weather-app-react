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
          href="https://github.com/saroltah/weather-app-react"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        by{" "}
        <a
          href="https://portfolio-sarolta-hegyi.netlify.app/"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Sarolta Hegyi
        </a>
      </small>
    </div>
  );
}
