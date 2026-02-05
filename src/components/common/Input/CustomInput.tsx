import styles from './CustomInput.module.css';

type CustomInputProps = {
    label: string;
    name: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
}

const CustomInput = ({
    label, name, type = "text", value, placeholder, onChange, error, required = false
}: CustomInputProps) => {
    return (
        <div className={styles.parent}>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                    {label}
                    {required && <span className='required'>*</span>}
                </legend>
                <input
                    className={styles.customInput}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </fieldset>
            {error && <span className='errorMsg'>{error}</span>}
        </div>
    )
}

export default CustomInput
