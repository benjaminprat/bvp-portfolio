import body from "../styles/Home.module.scss";
import styles from "../styles/Contact.module.scss";

import Tarot from "../components/Tarot";

export default function Contact() {
  return (
    <main className={body.main}>
      <div className={styles.container}>
        <Tarot
          link="https://github.com/benjaminprat"
          img="hat"
          height={150}
          width={150}
          name="Github"
        />

        <Tarot
          link="https://www.linkedin.com/in/benjaminprat/"
          img="plant bottle"
          height={200}
          width={150}
          name="LinkedIn"
        />

        <Tarot
          link="https://docs.google.com/document/d/e/2PACX-1vTkoFLVETGcEQyOWw5a7r9JZDvuALwuEMr78XdlNVBk5Jqrwq5hlSTS6FqTy7WTAOvIlnDqN-C_xiXD/pub"
          img="moon"
          height={150}
          width={150}
          name="Resume"
        />
      </div>
    </main>
  );
}
