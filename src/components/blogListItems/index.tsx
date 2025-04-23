import { postsData } from '../../services/postsApi/types'
import { BlogListItem } from "../blogListItem";
import './style.css'

export function BlogListItems({ postsData }: { postsData: postsData[] }) {
    return (
        <>
            <div className="blogListItems">
                {postsData.map((item, i) => (
                    <BlogListItem key={i} {...item} />
                ))}

            </div>
        </>
    )
}
