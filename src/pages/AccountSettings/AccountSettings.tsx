import { useLocation } from "react-router";

type AccountSettingsState = {
  state?: {
    email?: string;
    fullname?: string;
  }
}

const AccountSettings = () => {
  const { state } = useLocation() as AccountSettingsState;
  console.log("Account Settings State:", state);
  return (
    <div>
      <h1>Welcome to the Account Settings Page</h1>
    </div>
  )
}

export default AccountSettings
