import React from "react";
import { Buttons } from "../HomePage/HomePage.styles";
import { Group } from "./GroupButtons.style";

export default function GroupButtons() {
  return (
    <Group>
      <Buttons color="secondary" variant="contained" href="/steps">
        Quero ajudar!
      </Buttons>
      <Buttons color="primary" variant="contained" href="/learn-more">
        saiba mais
      </Buttons>
    </Group>
  );
}
