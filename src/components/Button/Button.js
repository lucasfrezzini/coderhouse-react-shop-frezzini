import React from 'react';
import "./Button.scss";

const Button = ({text, icon, type, size}) => {
	return (
		<button type={type} className={`Button ${size}`}>{text} {icon}</button>
	)
}

export default Button
