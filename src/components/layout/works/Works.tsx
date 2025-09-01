import { ProjectCarousel } from "../servicingCarousel/ProjectCarousel"
import { works } from "@/mocks/works/works"

import styles from "./works.module.sass"

export default function Works() {
    return (
        <div className={styles.WrapperWorks}>
            <h1 className={styles.TitleStyle}>{works.title}</h1>
            <p className={styles.TextStyle}>{works.text}</p>
            <span className={styles.HighlightStyle}>{works.highlight}</span>
            <div className={styles.ContainerWorks}>
                <ProjectCarousel />
            </div>
        </div>
    )
}
