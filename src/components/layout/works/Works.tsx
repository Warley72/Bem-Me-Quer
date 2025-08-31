import { ProjectCarousel } from "../servicingCarousel/ProjectCarousel"
import { works } from "@/mocks/works/works"
import styles from "./worlks.module.sass"

export default function Works() {
    return (
        <div className={styles.WrapperWorks}>
            <h1>{works.title}</h1>
            <p>{works.text}</p>
            <span>{works.highlight}</span>
            <div className={styles.ContainerWorks}>
                <ProjectCarousel />
            </div>
        </div>
    )
}
