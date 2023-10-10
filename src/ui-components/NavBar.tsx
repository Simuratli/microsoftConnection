import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import WelcomeName from "./WelcomeName";

import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }}>
                        <Link
                            component={RouterLink}
                            to="/"
                            color="inherit"
                            variant="h6"
                        >
                            MS Identity Platform
                        </Link>
                    </Typography>
                    <WelcomeName />
                    
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;