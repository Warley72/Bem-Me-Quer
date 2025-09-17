import styles from "./footer.module.sass"

export default function Footer () {
    return (
        <div className={styles.wrapperFooter}>
            <img className={styles.StyleLogoFooter} src="header/logoBemMeQuer.png" alt="logo" />
            <span className={styles.styleText}>©2025 Clinica de Estetica. All rights reserved. All trademarks referenced here are the properties of their respective owners.</span>
        </div>
    )
}
