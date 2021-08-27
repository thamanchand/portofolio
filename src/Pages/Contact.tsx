import * as React from 'react';
import { ContactStyle } from '../Style/Index';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import {
  LocationOnOutlined,
  PhoneIphoneOutlined,
  EmailOutlined,
  HomeOutlined
} from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';

import emailjs from 'emailjs-com'

import apiKeys from '../apiKeys'

const Contact: React.FC<{}> = () => {
  const style = ContactStyle();
  const [message, setMessage] = React.useState();
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  const [subject, setSubject] = React.useState();
  const [isEmailDelivered, setIsEmailDelivered] = React.useState(false);
  const [isFieldsEmpty, setFieldsEmpty] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);


  const templateParams = {
    from_name: "thaman.me@gmail.com",
    to_name: email,
    subject: subject,
    message_html: message
  }

  const sendEmail = e => {

    e.preventDefault();
    setIsLoading(true);
    if (!(message && email && name && subject)) {
      setFieldsEmpty(true);
    }
    else {
    emailjs
      .send('gmail', 'template_WMBHmq6K', templateParams, 'user_QTp37adr0vLu0wEMzsyuy')
      .then(
        result => {
          console.log(result.text)
          setIsEmailDelivered(true);
          setIsLoading(false);
          setMessage('');
          setEmail('');
          setName('');
          setSubject('');
          setFieldsEmpty(false);
        },
        error => {
          console.log(error.text)
        }
      )
    }
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changeSubject = (e) => {
    setSubject(e.target.value);
  }

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changeMessage = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className={style.container}>
      <Typography variant="h6" className={style.contactHeaderText}>
        GOT AN INTERESTING PROJECT?
      </Typography>
      <Grid container>
        <Grid item sm={12} md={8} xs={12} lg={8}>
          <Typography variant="body1" className={style.headerText}>
            LET'S DISCUSS:
          </Typography>
          <Grid container>
            <Grid item sm={5} md={3} xs={3}>

              <Typography variant="subtitle1" className={style.formText}>
                Your Name
              </Typography>
              <Typography variant="subtitle1" className={style.formText}>
                Email
              </Typography>
              <Typography variant="subtitle1" className={style.formText}>
                Subject
              </Typography>
              <Typography variant="subtitle1" className={style.formText}>
                Message
              </Typography>
            </Grid>
            <Grid item sm={7} md={9} xs={8}>
              <TextField
                className={style.input}
                value={name}
                placeholder="Aalto Jarvi/Dot Oy"
                onChange={changeName}
              />
              <TextField
                className={style.input}
                value={email}
                placeholder="alto@gmail.com"
                onChange={changeEmail}
              />
              <TextField
                className={style.input}
                value={subject}
                placeholder="Project discussion"
                onChange={changeSubject}
              />
              <TextField
                value={message}
                className={style.input}
                multiline
                margin="normal"
                rows="8"
                onChange={changeMessage}
              />
              
                <Button
                  className={style.sendMessageButton}
                  type="submit"
                  onClick={sendEmail}
                >
                  SEND MESSAGE
                </Button>
              
              {!isFieldsEmpty && isLoading && <CircularProgress size={24} />}
              {isFieldsEmpty && (
                <Typography variant="subtitle1" className=".Mui-error" color="error">
                All fields are required!
                </Typography>
              )}
              {isEmailDelivered && (
                <Typography variant="body1" className={style.headerSubtitle}>
                  Thank you for contacting us! We will get back to you within 24 hrs.
                </Typography>
              )}

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Contact;
