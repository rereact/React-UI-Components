import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton'

const CalculatorDisplay = () => {
    return (
        <div className="align">
            <div className="final">
                <p className="zero">0</p>
                <div className="combine">
                    <div>
                        <ActionButton buttonStyle="action" text="clear" />
                        <div>
                            <div className="numrow">
                                <NumberButton buttonStyle="number" text="7" />
                                <NumberButton buttonStyle="number" text="8" />
                                <NumberButton buttonStyle="number" text="9" />
                            </div>
                            <div className="numrow">
                                <NumberButton buttonStyle="number" text="4" />
                                <NumberButton buttonStyle="number" text="5" />
                                <NumberButton buttonStyle="number" text="6" />
                            </div>
                            <div className="numrow">
                                <NumberButton buttonStyle="number" text="1" />
                                <NumberButton buttonStyle="number" text="2" />
                                <NumberButton buttonStyle="number" text="3" />
                            </div>
                        </div>
                        <ActionButton buttonStyle="action" text="0" />
                    </div>
                    <div>
                        <NumberButton buttonStyle="symbol" text="/" />
                        <NumberButton buttonStyle="symbol" text="X" />
                        <NumberButton buttonStyle="symbol" text="-" />
                        <NumberButton buttonStyle="symbol" text="+" />
                        <NumberButton buttonStyle="symbol" text="=" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculatorDisplay