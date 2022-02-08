import fetch from "node-fetch";
const APIURL = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
    const res = await fetch(new URL(APIURL));
    const posts = await res.json();
    return posts;
}