import gitIcon from "../assets/gitIcon.png";

function About() {
  return (
    <div className="About container d-flex flex-column justify-content-center align-items-center text-center">
      <h1>Resume Builder Website</h1>
      <h2>Build and download Your Resume For free</h2>

      <p className="fw-bold">
        Created By{" "}
        <a href="mailto:abdallaaymanshandi3@gmail.com">@abdallaayman</a> using
        React and React-pdf
      </p>
      <a
        href="https://github.com/abdalla-ayman"
        className=" fw-bold"
        target="_blank"
      >
        GitHub <img src={gitIcon} alt="gitHubIcon" />
      </a>

      <div className="shoutOut">
        <p>
          Icons From{" "}
          <a href="flaticon.com" target="_blank">
            FlatIcons{" "}
          </a>
        </p>
        <p>
          Pdf background Image by
          <a href="https://unsplash.com/@nordwood" target="_blank">
            NordWood
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
