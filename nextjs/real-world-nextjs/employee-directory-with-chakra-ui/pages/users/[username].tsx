import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import {
  Avatar,
  Box,
  Center,
  Text,
  Image,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react"
import Link from "next/link"

import { users } from "../../data/users"

export const getStaticPaths: GetStaticPaths = () => {
  const paths = users.map(({ username }) => ({
    params: {
      username,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  { user: unknown },
  { username: string }
> = ({ params }) => {
  const { username } = params
  return {
    props: {
      user: users.find((user) => user.username === username),
    },
  }
}

const User: NextPage = ({ user }) => {
  const { cover_image, avatar, first_name, last_name, job_title, description } =
    user
  return (
    <Center marginTop={["0", "0", "8"]} boxShadow="lg" minHeight="fix-content">
      <Box>
        <Box position="relative">
          <Image
            src={cover_image}
            width="fit-content"
            height="250px"
            objectFit="cover"
            alt="cover"
          />
          <Flex
            alignItems="flex-end"
            position="absolute"
            top="0"
            left="0"
            backgroundColor={useColorModeValue(
              "blackAlpha.400",
              "blackAlpha.600"
            )}
            width="100%"
            height="100%"
            padding="8"
            color="white"
          >
            <Avatar size="lg" src={avatar} />
            <Box marginLeft="6">
              <Text as="h1" fontSize="xx-large" fontWeight="bold">
                {first_name} {last_name}
              </Text>
              <Text as="p" fontSize="large" lineHeight="1.5">
                {job_title}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          maxW="container.xl"
          margin="auto"
          padding="8"
          backgroundColor={useColorModeValue("white", "gray.700")}
        >
          <Text as="p">{description}</Text>
          <Link href="/" passHref>
            <Button marginTop="8" colorScheme="whatsapp" as="a">
              Back to all users
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  )
}

export default User
