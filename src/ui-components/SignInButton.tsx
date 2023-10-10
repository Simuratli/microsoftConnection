import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { loginRequest } from "../authConfig";

export const SignInButton = () => {
    const { instance } = useMsal();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleLogin = () => {
        setAnchorEl(null);
        instance.loginPopup(loginRequest);
    }

    return (
        <div>
            <Button
                onClick={handleLogin}
                color="primary"
            >
                Login
            </Button>
        </div>
    )
};