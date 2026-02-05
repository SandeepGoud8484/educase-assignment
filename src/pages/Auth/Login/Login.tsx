import { useState } from 'react'
import CustomInput from '../../../components/common/Input/CustomInput'
import styles from './Login.module.css'
import Button from '../../../components/common/Button/Button';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleValidation = () => {
    const newErrors: { email?: string; password?: string } = {};
    if(!email){
      newErrors.email = "Email is required";
    }
    if(!password){
      newErrors.password = "Password is required";
    }
    if(email && !/\S+@\S+\.\S+/.test(email)){
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const validatonErrors = handleValidation();
    setErrors(validatonErrors);
    if(Object.keys(validatonErrors).length === 0){
      navigate('/settings');
    }
  }

  return (
    <div className={styles.stack}>
      <div className={styles.textGroup}>
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <form className={styles.formGroup} onSubmit={handleSubmit}>
        <CustomInput 
        label="Email Address" 
        type="text" name='email' 
        value={email} 
        placeholder="Enter email address" 
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required={true}
        />
        <CustomInput 
        label="Password" 
        type="password" 
        name='password' 
        value={password} 
        placeholder="Enter password" 
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required={true}
        />
        <Button variant="loginButton" type='submit'>Login</Button>
      </form>
    </div>
  )
}

export default Login
