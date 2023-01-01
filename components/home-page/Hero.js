import Image from "next/image";
import classes from '../../styles/hero.module.css';

const Hero = () => {
    return (
        <div className={classes.hero}>
            <Image className={classes.image} src='/alamin.jpeg' width={200} height={200} />
            <h1>Hi, I'm Alamin</h1>
            <p>I blog about Web Development. Specially framework like React Js, Next Js and Wordpress</p>
        </div>
    )
}

export default Hero