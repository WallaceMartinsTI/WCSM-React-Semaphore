import styles from './Parameters.module.css'
import Semaphores from './Semaphores'
import { useState, useEffect } from 'react'

function Parameters({ started }) {

    const isStarted = started

    const [secGreen, setSecGreen] = useState(2)
    const [secYellow, setSecYellow] = useState(2)
    const [secRed, setSecRed] = useState(2)

    const [currentColor, setCurrentColor] = useState('GREEN')

    const changeColor = (color) => setCurrentColor(color)

    function numberFomatter(secs) {
        let result = (secs - 1) * 1000
        return result
    }

    useEffect(() => {

        function run() {

            if (currentColor === 'GREEN') {
                setTimeout(() => changeColor('YELLOW'), numberFomatter(secGreen))
            }

            if (currentColor === 'YELLOW') {
                setTimeout(() => changeColor('RED'), numberFomatter(secYellow))
            }

            if (currentColor === 'RED') {
                setTimeout(() => changeColor('GREEN'), numberFomatter(secRed))
            }
        }


        if (isStarted) {
            run()
        }

    }, [currentColor, isStarted])

    return (
        <>
            <Semaphores startColor={currentColor} />
            <div className={styles.mainContainer}>
                <div className={styles.title}>
                    <h1>Set time for lights</h1>
                </div>
                <form>
                    <section className={styles.gridContainer}>
                        <label htmlFor="green" id={styles.greenLabel}>Green:</label>
                        <input type="number" id="green" name="green" placeholder="Seconds" min='2' onChange={(e) => setSecGreen((e.target.value))} />

                        <label htmlFor="yellow" id={styles.yellowLabel}>Yellow:</label>
                        <input type="number" id="yellow" name="yellow" placeholder="Seconds" min='2' onChange={(e) => setSecYellow((e.target.value))} />

                        <label htmlFor="red" id={styles.redLabel}>Red:</label>
                        <input type="number" id="red" name="red" placeholder="Seconds" min='2' onChange={(e) => setSecRed((e.target.value))} />
                    </section>
                </form>
            </div>
            <strong>&copy;WCSM</strong>
        </>
    )
}

export default Parameters