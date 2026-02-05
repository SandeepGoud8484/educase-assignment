import styles from './Button.module.css'

type ButtonProps = {
    variant: "primary" | "secondary" | "loginButton",
    children: React.ReactNode,
    type?: "button" | "submit",
    // onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const Button = ({ variant = "primary", children, type, ...props }: ButtonProps) => {
    return (
        <button
        type={type}
        className={`${styles.button} ${styles[variant]}`}
        {...props}
        >
            {children}
        </button>
    )
}

export default Button