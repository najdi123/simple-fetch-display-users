export type FetchUsersType={
    id:number,
    name:string,
    email:string,
}

export async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok){
        throw new Error('Failed to fetch users')
    }
    return res.json()
    
}