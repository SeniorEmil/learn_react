import React from 'react';
import PropTypes from 'prop-types';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;