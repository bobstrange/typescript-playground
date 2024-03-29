import type { NextPage } from "next"
import { UserCard } from "../components/UserCard"
import { users } from "../data/users"

const Home: NextPage = () => {
  return (
    <div className="sm:w-9/12 sm:m-auto pt-16y pb-16">
      <h1 className="dark:text-white text-5xl font-bold text-center">
        Employees
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mt-14 ml-8 mr-8 sm:mr-0 sm:ml-0">
        {users.map((user) => (
          <div key={user.id}>
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
