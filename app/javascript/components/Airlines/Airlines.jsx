import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Airlinecard from "./Airlinecard";
import { Container, Header, Rowcontainer} from "./styles/Airlines.styled";

function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/airlines.json`)
      .then((responce) => setAirlines(responce.data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(airlines);
  return (
    <Container direction="column">
      <Header>
        <h1>Flights Review</h1>
      </Header>
      <Rowcontainer>
        {airlines.map((airline) => (
          <Fragment key={airline.id}>
            <Airlinecard airline={airline.attributes}/>
          </Fragment>
        ))}
      </Rowcontainer>
    </Container>
  );
}

export default Airlines;
