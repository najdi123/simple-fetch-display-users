import { fetchUsers } from "./lib/fetchUsers";

export default async function Home() {
  const Users = await fetchUsers()
  return (
    <div>
      Users
      <div>
        {JSON.stringify(Users)}
      </div>
    </div>
  );
}
