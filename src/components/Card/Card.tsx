import { Title, Div, ButtonSelected, Button } from "./styles";
import { useState } from "react";

import { GlobalStyle } from "../../styles/GlobalStyle";

const Card: React.FC = () => {
  const [selected, setSelected] = useState(false);

  function hasSelected() {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }

    console.log("foi");
  }
  return (
    <>
      <Div>
        <img
          src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80"
          alt="Card Img"
        />
        <Title>Nome do Card</Title>
        <span>
          Um exemplo de texto rápido para construir o título do card e fazer
          preencher o conteúdo do card.
        </span>
        <div>
          {selected ? (
            <ButtonSelected onClick={hasSelected}>Added</ButtonSelected>
          ) : (
            <Button onClick={hasSelected}>Add to list</Button>
          )}

          <Button>Read More</Button>
        </div>
      </Div>
      <GlobalStyle />
    </>
  );
};

export default Card;
