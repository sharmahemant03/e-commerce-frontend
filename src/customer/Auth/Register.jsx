import { Grid, TextField,Button } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data=new FormData(event.currentTarget)
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }
        console.log("UserData ",userData);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete='given-name'/>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete='given-name'/>

                </Grid>
                <Grid item xs={12} >
                    <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete='email'/>

                </Grid>

                <Grid item xs={12} >
                    <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete='password'/>

                </Grid>
                <Grid item xs={12}>
                    <Button
                variant="contained"
                className="bg-[#9155FD] w-full"
                type='submit'
                size='large'
                sx={{padding:".8rem 0",bgColor:"#9155FD"}}
                >Register</Button>
                </Grid>
                

            </Grid>

        </form>

        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>if you have already account ?</p>
                <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button>
            </div>
        </div>
 
    </div>
  )
}

export default Register
