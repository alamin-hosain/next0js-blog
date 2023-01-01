import classes from '../../styles/posts-grid.module.css';
import PostItem from './PostItem';

const PostsGrid = ({ posts }) => {
    return (
        <ul className={classes.grid}>
            {posts?.map((post) => (
                <PostItem key={post.slug} post={post} />
            ))}
        </ul>
    )
}


export default PostsGrid