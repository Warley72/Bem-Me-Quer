import styles from "./header.module.sass"

export default function Header() {
    return (
        <header className={styles.WrapperHeader}>
            <img className={styles.styleLogo} src="header/logoBemMeQuer.png" alt="LogoBemMeQuer"/>
            <div className={styles.WrapperLink}>
                <a className={styles.LinkStyle} href="#about">Sobre Nôs</a>
                <a className={styles.LinkStyle} href="#works">Serviços</a>
                <a className={styles.LinkStyle} href="#localizaçao">Localização</a>
            </div>
        </header>
    )
}
