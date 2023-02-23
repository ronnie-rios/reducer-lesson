export const fetchAllPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data;
}
export const fetchPostComments = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await response.json()
    return data;
}
export const fetchSinglePost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    return data;
}