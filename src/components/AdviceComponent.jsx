import { useEffect, useState } from "react";
import diceIcon from '../assets/images/icon-dice.svg';
import patternIconDesktop from '../assets/images/pattern-divider-desktop.svg';
import patternIconMobile from '../assets/images/pattern-divider-mobile.svg';
import '/src/App.css';
const AdviceComponent = () => {

    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

    const FetchAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
        setId(data.slip.id);
    };

    useEffect(() => {
        FetchAdvice();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 375);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="advice-container">
            <div className="rounded-2xl quote-box">

                <h1 className="p-8 md:p-8 advice-text">Advice #{id}</h1>
                <p className="px-8 md:p-4 quote">"{advice}"</p>
                <img className="px-6 pt-4 pb-16 md:py-16" src={isMobile ? patternIconMobile : patternIconDesktop} alt="Pattern Divider" />
                <div className="button-wrapper">
                    <button className="btn-dice" onClick={FetchAdvice}>
                        <img className="dice" src={diceIcon} alt="Dice Icon" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AdviceComponent;