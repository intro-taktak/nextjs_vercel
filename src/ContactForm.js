import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import MessageIcon from '@material-ui/icons/Message';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    phone: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        phone: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/mqkwkdrd',
      data: inputs,
    })
      .then((response) => {
        isSent();
        handleServerResponse(
          true,
          'Thank you, 메시지가 인트로에게 전달되었습니다.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  const useStyles = makeStyles((theme) => ({
    typography: {
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    popover: {
      marginTop: theme.spacing(-3),
    },
    media: {
      backgroundColor: '#c4001a',
      color: 'white'
    },
    contactInput:{
      paddingBottom: theme.spacing(2),
    }
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <main>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={handleClick}
          aria-describedby={id}
        >
          <MessageIcon className={classes.extendedIcon} />
          문의하기
        </Fab>
        <Backdrop className={classes.backdrop} open={open}>
          <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          className={classes.popover}
        >
          <Card className={classes.root}>
          <CardContent
            className={classes.media}
            title="Contemplative Reptile"
          >
            <h3 className={classes.typography}>👋 Got A Question for INTRO?</h3>
            <Typography className={classes.typography}>We'll respond to your question or comment as quickly as possible.</Typography>
          </CardContent>
          <CardContent>
            <form onSubmit={handleOnSubmit}>
                <TextField
                  className={classes.contactInput}
                  id="phone"
                  type="text"
                  name="phone"
                  onChange={handleOnChange}
                  required
                  value={inputs.phone}
                  label="연락처"
                  fullWidth
                ></TextField>
                <br></br>
                <TextField
                  className={classes.contactInput}
                  id="email"
                  type="email"
                  name="_replyto"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                  label="이메일"
                  fullWidth
                ></TextField>
                <br></br>
                <TextField
                  className={classes.contactInput}
                  id="message"
                  name="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                  label="문의내용"
                  rowsMax={5}
                  multiline
                  fullWidth
                />
                <br/><br/>
                <Button variant="contained" type="submit" disabled={status.submitting} fullWidth color="primary">
                  {!status.submitting
                    ? !status.submitted
                      ? '제출'
                      : '제출완료'
                    : '제출중...'}
                </Button>
              </form>
              {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
              </CardContent>
            </Card>
          
        </Popover>
      </Backdrop>
      
      
    </main>
  )
}

export default ContactForm;