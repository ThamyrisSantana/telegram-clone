import styled from "styled-components";

// SA - Setting area
// SC - Search chats
// CD - Channel data
// Cl - Channel list
//CN - Channel name

const Grid = styled.div`
  display: grid;

  grid-template-columns: 150px 447px auto;
  grid-template-rows: 85px auto;

  grid-template-areas:
    "SA SC CN"
    "SA CL CD";

  height: 100vh;

  @media (max-width: 1245px) {
    grid-template-columns: 120px 400px auto;
  }

  @media (max-width: 1009px) {
    grid-template-columns: auto;
    grid-template-rows: 70px auto;

    grid-template-areas:
      "CN"
      "CD";
  }
`;

export default Grid;
