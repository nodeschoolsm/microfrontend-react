import { Fragment } from "react";
import MicroFrontend from "../../MicroFrontend";
function About() {
  return (
    <Fragment>
      <MicroFrontend host="http://localhost:3000" name="banner" />
    </Fragment>
  );
}

export default About;
