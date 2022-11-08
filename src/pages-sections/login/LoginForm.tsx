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
  const initialValues = {
    email: "",
    password: "",
  };
  
  const formSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().min(6, "Minimum of 6 characters").required("Password is Required"),
  });

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    return values;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
  });

  const { toggleForm } = props;
  return (
    <Box sx={{border:1,width:500, position: 'absolute', top:70,ml:70,mt:15, borderRadius:10,  zIndex: 'tooltip',  background: '#F2F2F2'}}>
    <form>
      <Typography variant="h3" textAlign="center" mb={1}>
        Login with email
      </Typography>

      <TextField
        size="small"
        name="email"
        type="email"
        variant="outlined"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.email && !!errors.email}
        label="Email or Phone Number"
        placeholder="exmple@mail.com"
        sx={{
          borderRadius: 28,
          ml:{xs:3,sd:6,sm:9,md:10},
          width:300
        }}
      />
      <TextField
        size="small"
        name="password"
        label="Password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.password && !!errors.password}
        autoComplete="on"
        variant="outlined"
        sx={{
          width:300,
          borderRadius: 28,
          mt:7,
          ml:{xs:3,sd:6,sm:9,md:10},
        }}
      />
    <Typography sx={{ml:{xs:27,sd:29,sm:25,md:33}}} onClick={() =>{ Router.push('/forgot-password')}}>
      Forget Password?
    </Typography>
    </form>
    <Box sx={{display:'flex' , flexDirection: 'column',ml:15}}>
    <Button variant="contained" sx={{width:250,ml:{xs:-10,sd:-6,sm:2},borderRadius: 28,mt:4}}>
        Login
    </Button>
      <Button variant="contained" sx={{mt:5, width:250,ml:{xs:-10,sd:-6,sm:2},borderRadius: 28}} onClick={()=>{
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