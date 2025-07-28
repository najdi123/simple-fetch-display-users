import UserChart from "@/components/UserChart";
import { fetchUsers, FetchUsersType } from "./lib/fetchUsers";

export default async function Home() {
  try{
    const users: FetchUsersType[] = await fetchUsers();
  return (
    <div className="container mx-auto max-w-5xl py-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Users</h3>
      <div className="shadow-md rounded-lg overflow-hidden mb-12">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: FetchUsersType) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">{user.name}</td>
                <td className="py-4 px-6 text-gray-700">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UserChart />
    </div>
  );
  } catch(error){

    return(
          <div className="container mx-auto max-w-5xl py-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Users</h3>
      <p>Failed to fetch users {JSON.stringify(error)}</p>
      </div>
    )

  }
}