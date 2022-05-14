import pikachuImage from "../core/ui/image/pikachu.png";

import "./_welcome-page.scss";

import Page from "../component/page/Page";

function WelcomePage() {
  return (
    <Page>
      <div className={"welcome-page"}>
        <div>
          <h3 className={"typography--h3"}>{"Hi, I'm Yasin Çalışkan!"}</h3>

          <p className={"typography--body"}>
            {"Web developer working on blockchain ecosystem projects at Hipo."}
          </p>

          <div className={"welcome-page__link-container"}>
            <a
              href={"http://github.com/yasincaliskan"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {"GitHub"}
            </a>
            <a
              href={"https://www.linkedin.com/in/yasincaliskandev/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {"Linkedin"}
            </a>
          </div>
        </div>

        <img src={pikachuImage} alt={"Greeting Pikachu"} className={"pikachu-image"} />
      </div>
    </Page>
  );
}

export default WelcomePage;
