// @ts-nocheck
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import SignInSignOutButton from "./SignInSignOutButton";

type Props = {
    children?: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({children}) => {
    const location = useLocation()
    const data = location.search.split("=")[1]
   
    return (
        <>
         {children}
         
            <ul>
                {data && Object.entries(JSON.parse(decodeURIComponent(data))).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}: </strong> {value}
                    </li>
                ))}
            </ul>


            <div style={{display:"flex",justifyContent:"flex-end",marginTop:20}}>
                <SignInSignOutButton />
            </div>
           
        </>
    );
};