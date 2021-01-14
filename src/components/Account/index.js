import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Page({ match }) {
  const { name } = match.params;

  return (
    <Container>
      <div>
        <Link to="/accounts">BACK</Link>

        <div>
          <strong>This page is for {name}</strong>
          <a
            rel="noopener noreferrer"
            href={`https://firebase.google.com/`}
            target="_blank"
          >
            SHARE
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Page;
