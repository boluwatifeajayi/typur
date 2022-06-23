import styles from '../styles/Home.module.css'
import Modal from 'react-bootstrap'

export default function Header(){
  
    return <div>
      
        

        <nav className={styles.navy}>
            <div className={styles.logo}>
                <a className={styles.a}>TYPUR</a>
            </div>
            <div className={styles.menu}>
                <ul className={styles.ul}>
                    <li className={styles.li} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom"><a>Test Your Typing Abilities</a></li>
                    <li className={styles.li} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom"><a>Version 1.0.0</a></li>
                </ul>
            </div>
        </nav>
  

</div>

}