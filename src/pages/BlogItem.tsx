import { useEffect } from "react";
import { useParams } from "react-router";
import { Post } from "../components/post";
import { setPost } from "../lib/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { getApiPost } from "../services/postsApi";

export function BlogItem() {
    const { id } = useParams<{ id: string }>()
    const post = useAppSelector(state => state.posts.post)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!id) {
            return
        }
        getApiPost(Number(id)).then(data => dispatch(setPost(data)));
    }, []);

    return (
        <>
            <Post post={post} />
        </>
    )
}