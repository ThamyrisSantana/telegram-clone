import React from "react";

import { Container } from "./styles";

const SearchChats: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Search" />
    </Container>
  );
};

export default SearchChats;
