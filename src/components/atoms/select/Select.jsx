import PropTypes from 'prop-types'
import clsx from 'clsx'
import './select.css'

const Select = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary'

	return (
		<select
			className={clsx(
				'storybook-button',
				`storybook-button--${size}`,
				mode
			)}
		>

		</select>
	)
}

Select.propTypes = {
	primary: PropTypes.bool,
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

Select.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,
}

export default Select
