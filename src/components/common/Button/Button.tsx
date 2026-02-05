import styles from './Button.module.css'

type ButtonProps = {
    variant: "primary" | "secondary" | "loginButton",
    children: React.ReactNode
}

const Button = ({ variant = "primary", children }: ButtonProps) => {
    return (
        <button
        className={`${styles.button} ${styles[variant]}`}
        >
            {children}
        </button>
    )
}

export default Button