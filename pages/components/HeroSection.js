import Image from "next/image";
import styles from "../../styles/Hero.module.css";
import taskimg from "../../public/task.svg";
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
            task and mark as you finish. .jjd Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cum quae nostrum adipisci vel task and
            mark as you finish. .jjd Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum quae nostrum adipisci vel
          </p>
          <a href="../components/Tasks">
            <button>Get Started</button>
          </a>
        </div>
        <div className={styles.right}>
          <Image src={taskimg}></Image>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
