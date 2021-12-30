import styles from './Home.module.css'
import Buttons from './Buttons'

function Home() {

    return (
        <div className={styles.mainContainer}>
            <Buttons />
        </div>
    )
}

export default Home