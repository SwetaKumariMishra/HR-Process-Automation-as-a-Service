import PropTypes from 'prop-types'
import clsx from 'clsx'
import './button.css'

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary'

	return (
		<button
			type='button'
			className={clsx(
				'storybook-button',
				`storybook-button--${size}`,
				mode
			)}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
		</button>
	)
}

Button.propTypes = {
	primary: PropTypes.bool,
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,
}

export default Button
