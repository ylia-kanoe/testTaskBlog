import { useEffect } from 'react';
import { BlogListItems } from '../components/blogListItems';
import { Search } from '../components/search';
import { setPosts } from '../lib/features/posts/postsSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { getApiData, getApiPost } from "../services/postsApi";

export function Blog() {
    const posts = useAppSelector(state => state.posts.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiData().then(data => dispatch(setPosts(data)))
    }, []);

    function searchPost(search: string) {
        if (search !== '') {
            const id: number | undefined = (posts.find(item => item.title == search))?.id
            if (!id) {
                return
            }
            getApiPost(id).then(data => dispatch(setPosts([data])))
        } else {
            getApiData().then(data => dispatch(setPosts(data)))
        }
    }

    return (
        <>
            <section className='blog'>
                <div className='container'>
                    <h1 className='titleH1'>Блог</h1>
                    <p className='parText'>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                    <Search searchFunction={searchPost} />
                    <BlogListItems postsData={posts} />
                </div >
            </section>
        </>
    )
}