import styles from "./header.module.sass"

export default function Header() {
    return (
        <header className={styles.WrapperHeader}>
            <img className={styles.styleLogo} src="header/logoBemMeQuer.png" alt="LogoBemMeQuer"/>
            <div className={styles.WrapperLink}>
                <a href="">Sobre Nôs</a>
                <a href="">Serviços</a>
                <a href="">Contato</a>
            </div>
        </header>
    )
}
