import { Buttons } from "../HomePage/HomePage.styles";
import { Group } from "./GroupButtons.style";

export default function GroupButtons() {
  return (
    <Group>
      <Buttons color="secondary" variant="contained" href="#">
        I want to help!
      </Buttons>
      <Buttons color="primary" variant="contained" href="#about_us">
        About us
      </Buttons>
    </Group>
  );
}
