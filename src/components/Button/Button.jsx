import React from 'react'

import css from './Button.module.css'
import PropTypes from 'prop-types'

import { GiClick } from 'react-icons/gi'
import { IconContext } from 'react-icons'


const validStyles = {
    standard: 'standardStyle',
    primary: 'primaryStyle',
    secundary: 'secundaryStyle',
    third: 'thirdStyle',
    circular: 'circularStyle'
}

// Valid styles selectors
const validStylesSelector = [
    "standard",
    "primary",
    "secundary",
    "third",
    "circular"
]

const Button = ({ onClickHandler, text, icon, addStyle, fontDim, btnWidht, btnHeight }) => {
    // Styles
    const selector = validStyles[addStyle];

    // Button size
    const btnSize = [btnWidht, btnHeight];

    // Text or Icon
    const renderButton = () => {
        return (
            !icon
                ?   text 
                :   <IconContext.Provider value={ { size: `${fontDim}rem`} }>
                        <GiClick />
                    </IconContext.Provider>
            )
    }

    return (
        <>
            <button
                style={{ 
                    width: `${btnSize[0]}px`,
                    height: `${btnSize[1]}px` ,
                    fontSize:`${fontDim}rem`
                }}
                className={`${css[selector]}`}
                onClick={onClickHandler}>
                {renderButton()}
            </button>
        </>
    )
}

Button.defaultProps = {
    text: "click",
    icon: false,
    addStyle: "standard",
    fontDim: 1,
    btnWidht: 40,
    btnHeight: 40,
}

Button.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string,
    icon: PropTypes.bool,
    addStyle: PropTypes.oneOf(validStylesSelector).isRequired,
    fontDim: PropTypes.number,
    btnWidht: PropTypes.number,
    btnHeight: PropTypes.number,
}


export default Button;

/**
 *      onClickHandler: Recive a function and the trigger is a click event 
        addStyle: Select diferent types of styles
        fontDim: Assign font size on REM units
        btnWidht: Assign button widht on PX units
        btnHeight: Assign button height on PX units
 */