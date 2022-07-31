import Link from "next/link"
import {
  Box,
  Text,
  Avatar,
  Center,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"

type Props = {
  username: string
  avatar: string
  first_name: string
  last_name: string
}
export const UserCard: React.FC<Props> = ({
  username,
  avatar,
  first_name: firstName,
  last_name: lastName,
}) => {
  return (
    <Link href={`/users/${username}`} passHref>
      <a>
        <VStack
          spacing="4"
          borderRadius="md"
          boxShadow="xl"
          padding="5"
          backgroundColor={useColorModeValue("gray.50", "gray.700")}
        >
          <Center>
            <Avatar size="lg" src={avatar} />
          </Center>
          <Center>
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="xl">
                {firstName} {lastName}
              </Text>
            </Box>
          </Center>
        </VStack>
      </a>
    </Link>
  )
}
