export default async function  getAllUsers() {
    const result =await fetch('https://jsonplaceholder.typicode.com/users')
    return result.json()
}
