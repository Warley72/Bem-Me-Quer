import Scrollspy from 'react-scrollspy'
import styles from "./header.module.sass"

export default function Header() {
    return (
        <header className={styles.WrapperHeader}>
            <img className={styles.styleLogo} src="header/logoBemMeQuer.png" alt="LogoBemMeQuer" />
            <Scrollspy
                items={['about', 'works', 'localizaçao']}
                currentClassName={styles.ative}
                componentTag="div"
                className={styles.WrapperLink}
            >
                <a className={styles.LinkStyle} href="#about">Sobre Nós</a>
                <a className={styles.LinkStyle} href="#works">Serviços</a>
                <a className={styles.LinkStyle} href="#localizaçao">Localização</a>
            </Scrollspy>
        </header>
    )
}
