import { fetchUsers, FetchUsersType } from "./lib/fetchUsers";

export default async function Home() {
  const Users = await fetchUsers()
  return (
    <div>
      Users
      <div>
        <table>
          <thead>
            <tr>
              <td>
                name
              </td>
              <td>
                email
              </td>
            </tr>
          </thead>
          <tbody>
            {Users.map((user:FetchUsersType)=>(
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
