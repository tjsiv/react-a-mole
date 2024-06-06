import { useEffect } from 'react';
import moleImg from '../assets/mole.png';

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setDisplayMole(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, [props]);

    return (
        <div>
            <img
                style={{ width: '20vw', 'max-height': '20vh' }}
                src={moleImg}
                onClick={props.handleClick}
                alt="mole"
            />
        </div>
    );
}

export default Mole;
