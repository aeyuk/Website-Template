import React, { useState, useEffect } from 'react';
// import {Route} from 'react-router-dom';
import styles from './Sidebar.module.css';

// When visible, Sidebar is 300px wide
function Sidebar({ width, children }) {
    const [xPosition, setXPosition] = useState();

    useEffect(() => {
        setXPosition(0);
    }, []);

    function toggleSidebar() {
        if (xPosition < 0) {
            setXPosition(0);
        } else {
            setXPosition(-300)
        }
    }

    return (
        <div>
            <div 
                className={styles.Sidebar} 
                style={{transform: `translatex(${xPosition}px)`, width: 300}}>
                <button 
                    className={styles.Button} 
                    onClick={toggleSidebar}
                    style={{transform: `translate(300px, 10vh)`}}
                ></button>
                <div>{children}</div>
            </div>
        </div>
    )
};

export default Sidebar;
