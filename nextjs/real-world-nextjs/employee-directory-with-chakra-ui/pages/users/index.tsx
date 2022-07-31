import { Box, Grid, Text, GridItem } from "@chakra-ui/react"
import { NextPage } from "next"
import { UserCard } from "../../components/UserCard"
import { users } from "../../data/users"

const Users: NextPage = () => {
  return (
    <Box>
      <Text
        fontSize="xxx-large"
        fontWeight="extrabold"
        textAlign="center"
        marginTop="9"
      >
        Employees
      </Text>
      <Grid
        gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gridGap="10"
        padding="10"
      >
        {users.map((user) => (
          <GridItem key={user.id}>
            <UserCard {...user} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
export default Users
