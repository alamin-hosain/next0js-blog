import PostContent from "../../components/posts/post-detail/PostContent"
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
    return (
        <PostContent post={props.post} />
    )
}

export const getStaticProps = (ctx) => {
    const { slug } = ctx.params;
    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600,
    }
}

export const getStaticPaths = async () => {
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false,
    }
};



export default PostDetailPage