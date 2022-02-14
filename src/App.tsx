import React, { useState } from "react";
import styles from "./App.module.css";
import InputField from "./components/InputField/InputField";
import Button from "./components/Button/Button";

const App: React.FC = () => {
    const [line1, setline1] = useState<number>(100)
    const [line2, setline2] = useState<number>(100)
    const [line3, setline3] = useState<number>(100)
    const [triangle, setTriangle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const calculate = () => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if(line1 === 0 || line2 === 0 || line3 === 0){
            setError('Each line needs a value')
            return false
        }

        setTriangle(getTriangleType())



        const arr = []

        arr[1] = (line1 * line1 + line3 * line3 - line2 * line2) / (2 * line1)
        arr[0] = Math.sqrt(line3 * line3 - arr[1] * arr[1])

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, line1)
        ctx.lineTo(arr[0], arr[1])
        ctx.fill()
        setError('')
    }

    const getTriangleType = () => {

        if(line1 === line2 && line2 === line3) {
            return 'Equilateral'
        } else if(line1 === line2 || line1 === line3 || line2 === line3) {
            return 'Isosceles'
        } else {
            return 'Scalene'
        }

    }
    
    return (
        <div className={styles.container}>
            <InputField 
                label="Line 1" 
                setValue={setline1} 
                value={line1}
            />
            <InputField 
                label="Line 2" 
                setValue={setline2} 
                value={line2}
            />
            <InputField 
                label="Line 3" 
                setValue={setline3} 
                value={line3}
            />
            <Button value="Calculate triangle" onClick={() => calculate()} />
            { error ? error :triangle ?  <p>{ 'Triangle: ' + triangle }</p> : ''}
            <canvas id="canvas" width="800" height="800"></canvas>
        </div>
    )
}

export default App
