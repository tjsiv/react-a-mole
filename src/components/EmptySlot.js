import React, { useEffect } from 'react';
import MoleHill from '../assets/molehill.png';

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setDisplayMole(true);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, [props]);

    return (
        <div>
            <img
                style={{ width: '20vw', 'max-height': '20vh' }}
                src={MoleHill}
                alt="molehill"
            />
        </div>
    );
}

export default EmptySlot;
