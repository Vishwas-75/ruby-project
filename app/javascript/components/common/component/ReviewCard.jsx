import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import Review from "./Review";
import {
  Container,
  Card,
  W3Text,
  W4Text,
  Colcontainer,
  Rowcontainer,
  Button,
  Box,
} from "../styles/Common.styled";
import { makeRequest } from "../apicall/RequestAssist";

function ReviewCard({ reviews, setReviews, airlineId }) {
  const [openIndex, setOpenIndex] = useState();
  const [deleteIndex, setDeleteIndex] = useState();

  const handleSubmit = async (review) => {
    const url = `/api/v1/airlines/${airlineId}/airlinereviews/${review.id}`;

    const formData = new FormData();
    formData.append("airlinereview[title]", review.title);
    formData.append("airlinereview[description]", review.description);
    formData.append("airlinereview[score]", review.score / 10);
    const response = await makeRequest(url, "put", formData);
    const editedReview = response.attributes;
    let preReviews = reviews;
    let prevReviewIndex = reviews.findIndex(
      (review) => review.id === editedReview.id
    );
    preReviews[prevReviewIndex] = editedReview;
    setReviews(preReviews);
    setOpenIndex(null);
  };

  const handleDelete = async (review_id) => {
    const url = `/api/v1/airlines/${airlineId}/airlinereviews/${review_id}`;
    
    const response = await makeRequest(url, "delete", "", {
      onSuccess: (response) => {
        const newReviews = reviews.filter((review) => review.id !== review_id);
        setReviews(newReviews);
      },
    });
    setDeleteIndex(null);
  };
  // feature requirement
  // const fetchReviews = async () => {
  //   const url = `/api/v1/airlines/${airlineId}/airlinereviews`;

  //   const responce = axios
  //     .get(url)
  //     .then((res) => res)
  //     .catch((error) => console.log(error));
  //   console.log(responce);
  // };
  return (
    <Colcontainer style={{ width: "70%" }}>
      {reviews?.map((review, index) => (
        <React.Fragment key={index}>
          <Card mB="10px">
            <Rowcontainer
              jContent="space-between"
              aItems="center"
              style={{ width: "100%" }}
            >
              <Container direction="column">
                <W4Text size={16} primary>
                  {review.title}
                </W4Text>
                <W3Text size={12} primary>
                  {review.description}
                </W3Text>
                <W3Text size={10} primary>
                  {review.score}
                </W3Text>
              </Container>
              <Container>
                <Button onClick={() => setOpenIndex(index)}>Edit</Button>
                <Button onClick={() => setDeleteIndex(index)}>Delete</Button>
              </Container>
            </Rowcontainer>
            <Modal show={index === openIndex} onHide={() => setOpenIndex(null)}>
              <Review onSubmit={handleSubmit} propReview={review} />
            </Modal>
            <Modal
              show={index === deleteIndex}
              onHide={() => setDeleteIndex(null)}
            >
              <Box>
                <W4Text size={16} primary>
                  Are you sure
                </W4Text>
              </Box>
              <Box>
                <Button onClick={() => setDeleteIndex(null)}>No</Button>
                <Button onClick={() => handleDelete(review.id)}>Delete</Button>
              </Box>
            </Modal>
          </Card>
        </React.Fragment>
      ))}
    </Colcontainer>
  );
}

export default ReviewCard;
