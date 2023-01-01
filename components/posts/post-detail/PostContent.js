import PostHeader from "./PostHeader"
import classes from '../../../styles/post-content.module.css';
import ReactMarkDown from 'react-markdown';
import Image from "next/image";

const PostContent = (props) => {
    const { post } = props;

    const imagePath = `/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        image(image) {
            return <Image src={`/images/${image.src}`} alt={image.alt} width={600} height={300} />
        },
        paragraph(paragraph) {
            const { node } = paragraph;
            if (node.children[0].type === 'image') {
                const image = node.children[0];
                return <div className={classes.image}>
                    <Image src={`/images/${image.src}`} alt={image.alt} width={600} height={300} />
                </div>
            }
        }
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkDown renderers={customRenderers}>
                {post.content}
            </ReactMarkDown>
        </article>
    )
}

export default PostContent