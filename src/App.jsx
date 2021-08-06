import React, { useState } from "react";
import Review from "./Review.jsx";
import data from "./data.js";
import { Button, Flex, Stack, Heading } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const checkData = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextData = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkData(newIndex);
    });
  };
  const prevData = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkData(newIndex);
    });
  };
  const randomData = () => {
    let random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkData(random));
  };
  return (
    <div className="App">
      <div className="App-header">
        <Stack mb={5} align="center">
          <Heading>Our Reviews</Heading>
          <div className="underline" />
        </Stack>
        <Review index={index} data={data} />
        <Flex direction={"row"} mt={5}>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              prevData();
            }}
          >
            Previous
          </Button>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              randomData();
            }}
          >
            Surprice
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              nextData();
            }}
          >
            Next
          </Button>
        </Flex>
      </div>
    </div>
  );
}

export default App;
