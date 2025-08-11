import { LuBird } from "react-icons/lu";

import styles from "./header.module.sass"


export default function Header() {
    return (
        <div className={styles.WrapperHeader}>
            <a href="">About</a>
            <a href="">About</a>
            <LuBird className="h-12 w-12" />
            <a href="">About</a>
            <a href="">About</a>
        </div>
    )
}
