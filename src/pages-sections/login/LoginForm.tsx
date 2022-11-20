import { Box, TextField} from "@mui/material";
import { useFormik } from "formik";
import React, { FC} from "react";
import * as yup from "yup";
import Button from '@mui/material/Button';
import Login from "./Login";
import Typography from '@mui/material/Typography';

type SidenavProps = {
    toggleForm?: () => void;
};
const LoginForm: FC<SidenavProps> = (props) => {
    const { toggleForm } = props;
    return (
        <Box sx={{border:1,width:500, position: 'absolute', top:70,ml:70,mt:15, borderRadius:10,  zIndex: 'tooltip',  background: '#F2F2F2'}}>
            <form>
                <Typography variant="h3" textAlign="center" mb={1}>
                    Login with email
                </Typography>

                <TextField
                    name="email"
                    type="email"
                    variant="outlined"
                    label="Email or Phone Number"
                    placeholder="exmple@mail.com"
                    sx={{
                        borderRadius: 28,
                        ml:10,
                        mt:2,
                        width:300,
                    }}
                />
                <TextField
                    size="small"
                    name="password"
                    label="Password"
                    autoComplete="on"
                    variant="outlined"
                    sx={{
                        width:300,
                        borderRadius: 28,
                        mt:5,
                        ml:10
                    }}
                />
            </form>
            <Box sx={{display:'flex' , flexDirection: 'column',ml:15}}>
                <Button variant="contained" sx={{width:250, ml:2, borderRadius: 28, mt:4}}>
                    Submit
                </Button>
                <Button variant="contained" sx={{mt:5, width:250, ml:2, borderRadius: 28}} onClick={()=>{
                    toggleForm()
                }}>
                    Cancel
                </Button>
            </Box>
            <Typography sx={{mt:4, ml:25}}>
                Forget Password?
            </Typography>
        </Box>
    )
}
export default LoginForm