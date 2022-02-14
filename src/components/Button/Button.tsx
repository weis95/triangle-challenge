import React from "react";
import styles from './Button.module.css';

interface props {
    value: string
    onClick: (e: React.FormEvent) => void
    //handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ value, onClick }) => (
    <div className={styles.container}>
        <button  onClick={onClick} value={value}>
            {value}
        </button>
    </div>
);

export default InputField;
