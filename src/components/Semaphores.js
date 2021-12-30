import styles from './Semaphores.module.css'

function Semaphores({ startColor }) {

    let isStartedColor = startColor

    return (
        <>
            <div className={styles.mainContainer}>
                {isStartedColor === 'RED' ?
                    (<div className={styles.active} id={styles.red}></div>) :
                    (<div className={styles.circle} id={styles.red}></div>)}
                {isStartedColor === 'YELLOW' ?
                    (<div className={styles.active} id={styles.yellow}></div>) :
                    (<div className={styles.circle} id={styles.yellow}></div>)}
                {isStartedColor === 'GREEN' ?
                    (<div className={styles.active} id={styles.green}></div>) :
                    (<div className={styles.circle} id={styles.green}></div>)}
            </div>
        </>
    )
}

export default Semaphores