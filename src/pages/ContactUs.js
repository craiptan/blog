import Head from "next/head";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/footer";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import LinearProgress from '@mui/material/LinearProgress';

import { useState } from "react";


export default function ContactUs(){

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

  const submitForm = async (e) => {
    // We don't want the page to refresh
    e.preventDefault()
    setSending(true);
    const formURL = e.target.action
   
    // POST the data to the URL of the form
    const res = await fetch(formURL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const {error} = await res.json();

    if(error) {
      console.log(error);
      setSending(false);
      await Toast.fire({
        icon: 'error',
        title: 'Error',
      });
    }else{
      //reset form
      setSending(false);
      await Toast.fire({
        icon: 'success',
        title: 'Success',
      });
      setFullname("");
      setEmail("");
      setSubject("");
      setMessage("");

    }
  };
    return(
    <>
        <Head>
          <title>Whiptix </title>
          <meta
            name="description"
            content="Whiptix technologies"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container mx-auto px-4">
          <Navbar />   
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Get in touch
          </Typography>
          <Box component="form" noValidate action="/api/send_mail" onSubmit={submitForm} sx={{ mt: 3, display: 'flex', justifyContent: 'center'}}>
            <Grid container item xs={6} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    }
                  }}
                  value={fullname}
                  onChange={
                    (e) => {
                      setFullname(e.target.value)
                    }
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    }
                  }}
                  value={email}
                  onChange={
                    (e) => {
                      setEmail(e.target.value)
                    }
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  autoComplete="subject"
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    }
                  }}
                  value={subject}
                  onChange={
                    (e) => {
                      setSubject(e.target.value)
                    }
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  required
                  fullWidth
                  id="message"
                  name="message"
                  label="message"
                  minRows={5} 
                  value={message}
                  onChange={
                    (e) => {
                      setMessage(e.target.value)
                    }
                  }
                  multiline
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    }
                  }}/>
              </Grid>
              <Grid item xs={12}>
                <Button
                type="submit"
                variant="outlined"
                color="success"
                endIcon={<SendIcon />}
                fullWidth={true}
                >
                  Send
                </Button>
              </Grid>
              <Grid item xs={12}>
                {
                  (sending) && <LinearProgress color="success"/>
                }
              </Grid>
            </Grid>
          </Box>
        </Box>
          <Footer />
        </div>
      </>
    );
}