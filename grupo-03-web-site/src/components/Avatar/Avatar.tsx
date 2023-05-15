import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import content from "../../../public/data/AboutUs";
import {
  AvatarMui,
  Container,
  Icons,
  NameAndAge,
  Section,
  Triangle,
} from "./Avatar.styles";

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Avatar() {
  return (
    <Section>
      {content.team.map((person) => (
        <Container key={person.name}>
          <AvatarMui
            {...stringAvatar(`${person.name}`)}
            src={person.imageUrl}
          />
          <NameAndAge>
            {person.name}, {person.age}
          </NameAndAge>
          <Icons>
            <IconButton href={person.linkedinUrl}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href={person.githubUrl}>
              <GitHubIcon />
            </IconButton>
          </Icons>
          {/* <Triangle /> */}
        </Container>
      ))}
    </Section>
  );
}
