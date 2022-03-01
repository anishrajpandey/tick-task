import Image from "next/image";
import styles from "../../styles/Hero.module.css";
import taskimg from "../../public/task.svg";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <section id={styles.mainhero}>
        <div className={styles.left}>
          <h1>
            Get Your Day <br />
            <span>Managed</span>
          </h1>
          <p>
            Increase your productivity with a powerful task noting app. Note the
            task and mark as you finish. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste voluptates magni molestias. Necessitatibus
            reprehenderit, hic maiores pariatur corporis mollitia in qui modi.
          </p>
          <Link href="../components/Tasks">
            <button>Get Started</button>
          </Link>
        </div>
        <div className={styles.right}>
          <Image src={taskimg}></Image>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
