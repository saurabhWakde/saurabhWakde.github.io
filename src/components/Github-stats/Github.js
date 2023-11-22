import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Center, Image, SimpleGrid } from "@chakra-ui/react";
import "./style.css";
export const Github = () => {
  return (
    <div id="Github" className="git">
      <h1
        className="SectionTitle"
        style={{ "margin-top": "72px", "margin-bottom": "0.5rem" }}
      >
        Github
      </h1>
      <div className="github">
        <Center>
          <GitHubCalendar username="Htripathi07" />
        </Center>

        <SimpleGrid
          w={"90%"}
          margin="auto"
          alignItems="center"
          columns={[1, 1, 2, 2]}
          gap="10px"
          marginTop={"40px"}
        >
          <Center>
            <Image
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=saurabhWakde&count_private=true&show_icons=true&theme=radical"
            />
          </Center>
          <Center>
            <Image
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=saurabhWakde"
            />
          </Center>
        </SimpleGrid>
        <Center mt="30px">
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=saurabhWakde"
          />
        </Center>
      </div>
    </div>
  );
};
