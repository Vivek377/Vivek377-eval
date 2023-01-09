import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";

const projects = ({ data }) => {
  return (
    <div>
      <Center>
        <h1>Projects</h1>
      </Center>
      <Grid mt="2rem" templateColumns="repeat(2, 1fr)" gap="9rem">
        {data.map((ele) => {
          return (
            <GridItem
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              key={ele.id}
              padding="2rem"
              lineHeight="2rem"
            >
              <Link href={ele.html_url}>
                <h2>{ele.name}</h2>
                <p>{ele.full_name}</p>
                <Flex justifyContent="space-between">
                  <p>{ele.stargazers_count} stars</p>
                  <p>{ele.forks_count} forks</p>
                  <p>{ele.language}</p>
                </Flex>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export async function getStaticProps() {
  let r = await fetch(
    `https://api.github.com/search/repositories?q=user:Vivek377+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let d = await r.json();
  return {
    props: {
      data: d.items,
    },
  };
}

export default projects;
