import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Center,
  Grid,
  GridItem,
  Card,
  CardBody,
  Image,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home({ data, gitInfo }) {
  console.log(data);

  return (
    <>
      <Box>
        <Flex gap="3rem">
          <Box h="10rem" w="30%">
            <Stack direction="column">
              <Center>
                <h1>GitHub Intro</h1>
              </Center>
              <Box>
                <Card
                  maxW="sm"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  lineHeight="2rem"
                  padding="3rem"
                >
                  <CardBody>
                    <Center>
                      <Image
                        w="20%"
                        src={gitInfo.avatar_url}
                        alt="Green double couch with wooden legs"
                        borderRadius="50%"
                      />
                    </Center>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Heading size="md">{gitInfo.name}</Heading>
                      </Center>
                      <Center>
                        <Text>
                          Full-stack Developer | FOSS | JavaScript | Typescript
                          | NodeJS | Deno | ReactJS | HTML | CSS | Chakra-UI |
                          MUI
                        </Text>
                      </Center>
                    </Stack>
                  </CardBody>

                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Center>
                        <Button variant="solid" colorScheme="blue">
                          <Link href="https://drive.google.com/file/d/19Upxh0uAASLxIjYiD-TX-fCBmEGFhvuj/view?usp=sharing">
                            Resume
                          </Link>
                        </Button>
                        <Button variant="ghost" colorScheme="blue">
                          <Link href="https://github.com/Vivek377">Follow</Link>
                        </Button>
                      </Center>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
                <Center>
                  <h1>Tech Stack</h1>
                </Center>
                <Box
                  mt="2rem"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  lineHeight="3rem"
                >
                  <Button>TYPESCRIPT</Button>
                  <Button>REACT.JS</Button>
                  <Button>NODE.JS</Button>
                  <Button>MONGODB</Button>
                  <Button>GIT</Button>
                  <Button>CHAKRA-UI</Button>
                  <Button>CSS</Button>
                </Box>
                <Center>
                  <h1>Education</h1>
                  </Center>
                  <Box
                    mt="2rem"
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    lineHeight="3rem"
                    padding='2rem'
                  >
                    <h3>Masai School</h3>
                    <h4>Full Stack Web Development</h4>
                    <p>May, 2022 to Present</p>
                    <h3>School of Open Learning</h3>
                    <h4>Bachelors in Arts</h4>
                    <p>September 2019 not completed</p>
                    <h3>CBSE</h3>
                    <h4>Intermediate with Arts Stream</h4>
                    <p>Completed in 2019</p>
                  </Box>
              </Box>
            </Stack>
          </Box>
          <Box w="70%">
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
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  let r = await fetch(
    `https://api.github.com/search/repositories?q=user:Vivek377+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let d = await r.json();
  let r2 = await fetch(`https://api.github.com/users/Vivek377`);
  let d2 = await r2.json();
  return {
    props: {
      data: d.items,
      gitInfo: d2,
    },
  };
}
