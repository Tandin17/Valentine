import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './valentine.css';

const ValentineCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHearts, setShowHearts] = useState(false);

    const toggleLetter = () => {
        setIsOpen(!isOpen);
        setShowHearts(true);
        setTimeout(() => setShowHearts(false), 2000);
    };

    return (
        <div className="container">
            {showHearts && (
                <div className="floating-hearts">
                    {[...Array(20)].map((_, i) => (
                        <Heart
                            key={i}
                            className="floating-heart"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDuration: `${2 + Math.random() * 3}s`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                            size={20 + Math.random() * 20}
                        />
                    ))}
                </div>
            )}

            <div className="card-wrapper">
                <button
                    onClick={toggleLetter}
                    className={`envelope ${isOpen ? 'open' : ''}`}
                >
                    <div className="envelope-pattern">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="pattern-line"
                                style={{ top: `${i * 20}%` }}
                            />
                        ))}
                    </div>

                    <div className="envelope-flap">
                        <div className={`heart-seal ${isOpen ? 'hidden' : ''}`}>
                            <Heart className="heart-icon" />
                        </div>
                    </div>

                    <div className="envelope-bottom" />
                </button>

                <div className={`letter ${isOpen ? 'open' : ''}`}>
                    <div className="letter-content">
                        <div className="heart-container">
                            <Heart className="heart-icon pulsing" />
                        </div>

                        <h2 className="title">Happy Valentine's Day!</h2>

                        <div className="message">
                            <p className="poem">
                                A little note, just here to say, <br />
                                You're in my heart this Valentine’s Day. <br />
                                No fancy words or grand display, <br />
                                Just love that grows in every way.
                            </p>

                            <p className="signature">
                                Forever yours❤️
                            </p>
                        </div>

                        <div className="corner top-left" />
                        <div className="corner top-right" />
                        <div className="corner bottom-left" />
                        <div className="corner bottom-right" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValentineCard;