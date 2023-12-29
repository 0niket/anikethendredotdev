import "./App.css";
import "./BCard.css";
import "./button.css";

function App() {
  return (
    <div className="bc-main">
      <div className="bc-main__header" />
      <div className="bc-main__body">
        <div className="bc-main__body-intro">
          <h2 className="bc-main__body-intro-element">Aniket Hendre</h2>
          <p className="bc-main__body-intro-element text-yellow">
            Product Engineer
          </p>
          <p className="bc-main__body-intro-element">
            <a href="https://blog.anikethendre.dev">blog.anikethendre.dev</a>
          </p>
        </div>
        <div className="bc-main__body-cta-container">
          <button className="bc-main__body-cta button">
            <img
              src="/Mail.svg"
              alt="Contact Me"
              className="button-icon-left"
            />
            <span className="button-text">Email</span>
          </button>
          <button className="bc-main__body-cta button bg-blue text-white">
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="button-icon-left"
            />
            <span>LinkedIn</span>
          </button>
        </div>
        <div className="bc-main__body-about">
          <h3 className="bc-main__body-about-heading">About</h3>
          <p>
            Writes code on both the ends of Web Application. A polyglot
            programmer with experience in writing Javascript on the Frontend,
            and Clojure on the Backend.
          </p>
          <p>
            Previously worked at Helpshift. A SaaS product for managing and
            automating customer support. TODO: Get numbers and mention scale at
            which we worked.
          </p>
          <p>
            Currently, I am focused on solving problems for Digital Content
            Creators by building{" "}
            <a href="https://cogniplay.framer.ai">Cogniplay</a>. My primary
            goals are addressing <strong>Community Building</strong> and
            <strong> Monetization challenges</strong> faced by content creators.
            I am passionate about building products with <strong>Users </strong>
            in mind, advocating for iterative development with a short feedback
            loop.
          </p>
          <h3 className="bc-main__body-about-heading">Interests</h3>
          <p>
            When not writing code, I go out for walk and listen to podcasts. The
            Knowledge Project, Hardcore History, Puliabaazi are some of my
            favourite podcasts. On weekends, I like to go on treks. And I find
            rejuvenation in extended travels.
          </p>
        </div>
      </div>
      <div className="bc-main__footer">
        <a href="github.com">Github icon</a>
        <a href="twitter.com">Twitter icon</a>
      </div>
    </div>
  );
}

export default App;
