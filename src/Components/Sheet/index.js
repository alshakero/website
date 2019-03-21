import React from 'react';
import styles from './Sheet.module.css';

export default function Sheet({ children, style = {} }) {
    return (
        <div style={style} className={styles.page}>
            {children}
        </div>
    );
}
