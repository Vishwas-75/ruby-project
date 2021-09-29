import React, { useRef,useEffect,useState } from "react";

import Input from "./Input";
import Range from "./Range";
import { isEmpty } from "../../../util/utilFunction";
import { Rowcontainer, Container,Button } from "../styles/Common.styled";


function Review({ onSubmit, propReview={} }) {
  const [review, setReview] = useState({
    title: "",
    description: "",
    score:0,
  });
  const reviewRef = useRef();
  reviewRef.current = [];

  useEffect(() => {
   const  formatReview = {...propReview,score:propReview.score*10}
   setReview({...review,...formatReview})
  }, [])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview({ ...review, [name]: value });
    console.log(value);
  };

  const handleSubmit = () => {
    reviewRef.current["title"].handleSubmit();
    reviewRef.current["description"].handleSubmit();
    const isValid = !isEmpty(review.title) && !isEmpty(review.description);
    if (isValid) {
      onSubmit(review);
    }
  };

  return (
      <Container direction="column">
        <Rowcontainer>
          <Input
            name="title"
            label="Title"
            onChange={handleChange}
            value={review.title}
            type="text"
            ref={(e) => (reviewRef.current["title"] = e)}
          />
        </Rowcontainer>
        <Rowcontainer>
          <Input
            name="description"
            label="Description"
            onChange={handleChange}
            value={review.description}
            type="text"
            ref={(e) => (reviewRef.current["description"] = e)}
          />
        </Rowcontainer>
        <Rowcontainer>
          <Range
            label="Rateing"
            name="score"
            min="0"
            onChange={handleChange}
            max="50"
            value={review.score}
            step="1"
          />
        </Rowcontainer>
        <Rowcontainer jContent="flex-end">
          <Button onClick={handleSubmit}>Submit</Button>
        </Rowcontainer>
      </Container>
  );
}

export default Review;
