import { Link } from "react-scroll";

import styles from "./header.module.sass";

export default function Header() {
    return (
        <header className={styles.WrapperHeader}>
            <img
                className={styles.styleLogo}
                src="header/logoBemMeQuer.png"
                alt="LogoBemMeQuer"
            />
            <div className={styles.WrapperLink}>
                <Link
                    className={styles.LinkStyle}
                    activeClass={styles.ative}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Sobre Nós
                </Link>
                <Link
                    className={styles.LinkStyle}
                    activeClass={styles.ative}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Serviços
                </Link>
                <Link
                    className={styles.LinkStyle}
                    activeClass={styles.ative}
                    to="localizaçao"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Localização
                </Link>
            </div>
        </header>
    );
}
