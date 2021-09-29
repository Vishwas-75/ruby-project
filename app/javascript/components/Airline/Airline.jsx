import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

import {
  Rowcontainer,
  Colcontainer,
  Box,
  Title,
  Button,
} from "../common/styles/Common.styled";
import { ImageContainer, Header } from "./styles/Airline.styled";
import { makeRequest } from "../common/apicall/RequestAssist";
import Review from "../common/component/Review";
import ReviewCard from "../common/component/ReviewCard";

function Airline(props) {
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState([]);

  const [open, setOpen] = useState(false);
  const fetchAirline = () => {
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((res) => {
        const result = res.data.data.attributes;
        const resultReview = res.data.included || [];
        const extractedReview = resultReview.map((review) => review.attributes);
        setAirline({ ...result });
        setReviews([...extractedReview]);
      })
      .catch((res) => console.log(res.err));
  };

  useEffect(() => {
    fetchAirline();
  }, []);

  const handleSubmit = async (review) => {
    let url = `/api/v1/airlines/${airline.id}/airlinereviews`;

    const formData = new FormData();
    formData.append("airlinereview[title]", review.title);
    formData.append("airlinereview[description]", review.description);
    formData.append("airlinereview[score]", review.score / 10);
    formData.append("airlinereview[airline_id]", airline.id);
    const response = await makeRequest(url, "post", formData);
    setOpen(!open);
    fetchAirline();
  };

  return (
    <React.Fragment>
      <Colcontainer>
        <Header>
          <ImageContainer>
            <img src={airline.image_url} width="100px" height="100px" />
          </ImageContainer>
        </Header>
        <Rowcontainer style={{ marginTop: "3.5rem" }} jContent="space-around">
          <Box>
            <Title size={"15px"}>{airline.name}</Title>
          </Box>
          <div style={{ flexGrow: 0.6 }} />
          <Box>
            <Button onClick={() => setOpen(true)}> Add Review </Button>
          </Box>
        </Rowcontainer>
        <Rowcontainer aItems="center" jContent="center">
          <ReviewCard
            reviews={reviews}
            setReviews={setReviews}
            airlineId={airline.id}
          />
        </Rowcontainer>
      </Colcontainer>
      <Modal show={open} onHide={() => setOpen(!open)}>
        <Review onSubmit={handleSubmit} />
      </Modal>
    </React.Fragment>
  );
}

export default Airline;
