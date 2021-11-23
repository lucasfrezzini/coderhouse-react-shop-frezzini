import React from 'react';
import "./Button.scss";

const Button = ({text, icon, type, variant}) => {
	return (
		<button type={type} className={`Button ${variant}`}>{text} {icon}</button>
	)
}

export default Button
