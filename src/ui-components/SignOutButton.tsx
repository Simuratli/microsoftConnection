import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from '@mui/material/IconButton';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from "@mui/material";
export const SignOutButton = () => {
    const { instance } = useMsal();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleLogout = (logoutType: string) => {
        setAnchorEl(null);

        if (logoutType === "popup") {
            instance.logoutPopup({
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect();
        }
    }

    return (
        <div>
            <Button onClick={()=>{handleLogout("popup")}}></Button>
        </div>
    )
};