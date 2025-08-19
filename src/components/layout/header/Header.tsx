import styles from "./header.module.sass"

export default function Header() {
    return (
        <nav className={styles.WrapperHeader}>
            <img src="logoBem1.jpg" alt="LogoBemMeQuer" className={styles.styleLogo}/>
            <div className={styles.WrapperLink}>
                <a href="">About</a>
                <a href="">About</a>
                <a href="">About</a>
                <a href="">About</a>
            </div>
        </nav>
    )
}
