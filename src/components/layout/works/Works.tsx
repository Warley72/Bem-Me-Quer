import { ProjectCarousel } from "../servicingCarousel/ProjectCarousel"

import styles from "./works.module.sass"

export default function Works() {
    return (
        <div className={styles.WrapperWorks}>
            <h1 className={styles.TitleStyle}>Serviços Disponíveis</h1>
            <p className={styles.TextStyle}>
                Na Bem me quer você encontra: cabeleireira, manicure, pedicure,
                unhas de fibra, banho de gel e alongamento de cílios
                tudo em um só espaço feito para realçar sua beleza.
            </p>
            <div className={styles.ContainerWorks}>
                <ProjectCarousel />
            </div>
        </div>
    )
}
