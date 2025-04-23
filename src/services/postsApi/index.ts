import { postsData } from "./types";

class Instance {
    getPostsList = async (): Promise<postsData[]> => {
        return await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        ).then((response) => response.json())
    }

    getPostItem = async (id: number): Promise<postsData> => {
        return await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + id
        ).then((response) => response.json())
    }
}

export const PostsApi = new Instance();

export const getApiData = async () => {
    return await PostsApi.getPostsList()
};

export const getApiPost = async (id: number) => {
    return await PostsApi.getPostItem(id)
};