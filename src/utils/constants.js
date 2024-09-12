export const validatePassword = (password) => {
    // Regular expressions for different password patterns
    const patterns = {
        // At least one uppercase letter, one lowercase letter, one digit, and one special character
        strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        // At least one uppercase letter, one lowercase letter, and one digit
        medium: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
        // At least 8 characters long
        weak: /^.{8,}$/
    };

    // Check if password matches any of the patterns
    if (patterns.strong.test(password)) {
        return 'Strong password';
    } else if (patterns.medium.test(password)) {
        return 'Medium password';
    } else if (patterns.weak.test(password)) {
        return 'Weak password';
    } else {
        return 'Invalid password';
    }
}