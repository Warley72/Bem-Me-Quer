import Projects from "../Projects/Projects"
import styles from "./about.module.sass"

export default function About() {
    return (
        <div className={styles.wrapperAbout}>
            <div className={styles.ContainerText}>
                <h1>Sobre Nôs</h1>
                <p>
                    Bem me Quer, um espaço pensado para realçar a sua beleza e bem-estar.
                    Aqui você encontra serviços completos de <span>limpeza de pele, cabeleireira, manicure, pedicure, alongamento de cílios,
                    unhas de fibra e banho de gel </span>, sempre com cuidado, qualidade e dedicação. Nosso objetivo é oferecer uma experiência
                    única, onde cada detalhe é feito para que você se sinta ainda mais confiante, elegante e especial.
                </p>
            </div>
            <Projects />
        </div>
    )
}
