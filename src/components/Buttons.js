import styles from './Buttons.module.css'
import Parameters from './Parameters'
import { useState } from 'react'

function Buttons() {

    const [ running, setRunning ] = useState(true)

    return (
        <>
            <div className={styles.buttonsContainer}>
                <button className={styles.on} onClick={() => setRunning(true)}>ON</button>
                <button className={styles.off} onClick={() => setRunning(false)}>OFF</button>
            </div>
            <Parameters started={running} />
        </>
    )
}

export default Buttons