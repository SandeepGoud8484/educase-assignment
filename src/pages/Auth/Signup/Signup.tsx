import styles from './Signup.module.css'
import CustomInput from '../../../components/common/Input/CustomInput'
import Button from '../../../components/common/Button/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';

type SignupErrors = {
  fullname?: string;
  phone?: string;
  companyName?: string;
  email?: string;
  password?: string;
  isAgency?: string;
}
const Signup = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgency, setIsAgency] = useState<"yes" | "no" | "">('');
  const [errors, setErrors] = useState<SignupErrors>({});

  const handleValidation = () => {
    const newErrors: SignupErrors = {};
    if (!fullname) {
      newErrors.fullname = "Full name is required";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!isAgency) {
      newErrors.isAgency = "Please select a value";
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (phone && !/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    return newErrors;
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const validatonErrors = handleValidation();
    setErrors(validatonErrors);
    if (Object.keys(validatonErrors).length === 0) {
      navigate('/settings', {
        state: {
          email,
          fullname
        }
      });
    }
  }
  return (
    <div className={styles.stack}>
      <h2>Create your PopX account</h2>
      <form className={styles.formGroup} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <CustomInput
            label="Full Name"
            type="text" name='fullName'
            value={fullname}
            placeholder="Enter full name"
            onChange={(e) => setFullname(e.target.value)}
            error={errors.fullname}
            required={true}
          />
          <CustomInput
            label="Phone number"
            type="number" name='phone'
            value={phone}
            placeholder="Enter phone number"
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
            required={true}
          />
          <CustomInput
            label="Email Address"
            type="email" name='email'
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
          <CustomInput
            label="Company name"
            type="text" name='companyName'
            value={companyName}
            placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)}
            error={errors.companyName}
            required={false}
          />
          <div className={styles.radioGroup}>
            <p>Are you an Agency?<span className='required'>*</span></p>

            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === "yes"}
                onChange={() => setIsAgency("yes")}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === "no"}
                onChange={() => setIsAgency("no")}
              />
              No
            </label>

            {errors.isAgency && <span className={`errorMsg ${styles.errorMsg}`}>{errors.isAgency}</span>}
          </div>
        </div>
        <div className={styles.formButton}><Button variant="primary" type='submit'>Create Account</Button></div>
      </form>
    </div>
  )
}

export default Signup
