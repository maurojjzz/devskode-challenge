import styles from "./about.module.css";
const About = () => {
  return (
    <div className={`d-flex flex-column align-items-center ${styles.aboutContainer}`}>
      <h1>About Us</h1>
      <div className={`d-flex flex-column align-items-center justify-content-start ${styles.aboutSubContainer}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque unde quis optio debitis ab, impedit ipsa
          cupiditate tenetur voluptatum error cum dolores natus, exercitationem aspernatur fuga quibusdam aliquid hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque unde quis optio debitis ab, impedit ipsa
          cupiditate tenetur voluptatum error cum dolores natus, exercitationem aspernatur fuga quibusdam aliquid hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque unde quis optio debitis ab, impedit ipsa
          cupiditate tenetur voluptatum error cum dolores natus, exercitationem aspernatur fuga quibusdam aliquid hic.
        </p>
      </div>
    </div>
  );
};

export default About;
