import styled from "styled-components";

// SA - Setting area
// SC - Search chats
// CD - Channel data
// Cl - Channel list
//

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 130px 447px auto;
  grid-template-rows: 72px auto;

  grid-template-areas:
    "SA SC CD"
    "SA CL CD";

  height: 100vh;
`;
