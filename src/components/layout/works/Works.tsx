import { Card } from "../../ui/card"

import styles from "./worlks.module.sass"

export default function Works() {
    return (
        <div className={styles.WrapperWorks}>
            <div>
                <h1 className={styles.StyleTitle}>Services</h1>
                <div>
                    <Card className={styles.StylesCard}>
                        <h1>Componente de trabalhos</h1>
                    </Card>
                </div>
            </div>
        </div>
    )
}
