import { Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";
import "./GitCalender.style.css";
export default function Gitstats() {
  return (
    <section class="github-st" id="github">
      <div id="github-stats">
        <div class="container">
          <Heading as="h1">Github Stats</Heading>
          <div class="github-stats-list">
            <div class="github-stat">
              <img
                src="https://camo.githubusercontent.com/693da3e1b23b5afba46ac3a1ae2141dbf3484a855301bb19da8cd3da299988fa/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d64656570616b6b756d6172666174686b617226"
                alt="Github Contributions"
              />
            </div>
            <div class="github-stat">
              <GitHubCalendar username="deepakkumarfathkar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
