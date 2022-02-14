import React, { useState } from "react"
import styles from './InputField.module.css'

interface props {
    value: number
    label: string
    setValue: React.Dispatch<React.SetStateAction<number>>
}

const InputField: React.FC<props> = ({ value, label, setValue}) => {
    const [valid, setValid] = useState<boolean>(true)

    const validate = (value: number) => {

        setValue(value)

        if(!value) {
            setValid(false);
        } else if(value < 1 || value > 300 ){
            setValid(false);
        } else {
            setValid(true);
        }
        
    };

    const onChange = (value: number) => {
        validate(value)
    }
    
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <input 
                className={!valid ? styles.invalid : ''} 
                onChange={(e) => onChange(Number(e.target.value))} 
                value={value}
                type='number'
            />
        </div>
    )
}

export default InputField
