import React, {useState} from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {Typography,
    Grid,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Container} from '@material-ui/core';
import MuiPhoneNumber from "material-ui-phone-number";

function Contact (props){
    const [customerContact, setValue] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    })
    const [phone, setPhone] = useState('')
    const classes = useStyles();

    const handleChange = (e) =>{

        setValue({ ...customerContact, [e.target.name]: e.target.value });
        //props.setEmail(e.target.value);

    }
    const handlePhoneChange = (value) => {
        setPhone({phone: value})

    }


    return(
        <div>
            <Grid container justify="center" spacing={8}>
                <Grid item>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>

                            <Typography component="h1" variant="h5" style={{fontFamily: 'Quicksand'}} className={classes.hours} >
                                Contact Us
                            </Typography>
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField
                                            value={customerContact.firstName}
                                            onChange={handleChange}

                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField
                                            value={customerContact.lastName}
                                            onChange={handleChange}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item  xs={12}>

                                        <MuiPhoneNumber
                                           className={classes.root_2}
                                            onChange={handlePhoneChange}
                                            variant='outlined'
                                            fullWidth
                                            required
                                            label='Phone Number'
                                            id='Phone Number'
                                            name='phoneNumber'
                                            defaultCountry='nl'
                                            regions={'europe'}/>


                                    </Grid>
                                    <Grid item xs={12}>
                                        <CssTextField

                                            value={customerContact.email}
                                            onChange={handleChange}
                                            variant="outlined"
                                            type='email'
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CssTextField
                                            variant='outlined'
                                            id="outlined-multiline-static"
                                            label="Comment"
                                            multiline
                                            fullWidth
                                            rows={4}
                                            defaultValue="Comment"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I want to receive inspiration, marketing promotions and updates via email."
                                        />
                                    </Grid>
                                </Grid>

                                <button className={classes.submit} style={{alignContent: 'center', fontWeight: 'bolder'}}>Submit</button>
                            </form>
                        </div>

                    </Container>
                </Grid>
                <Grid item>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <h1 className={classes.hours}>{props.company}</h1>
                            <h1 className={classes.hours}>555-555-1212</h1>
                            <h2 className={classes.hours}>Hours</h2>
                            <h3 className={classes.hours}>Monday 9:00am - 10:00pm</h3>
                            <h3 className={classes.hours}>Tuesday 9:00am - 10:00pm</h3>
                            <h3 className={classes.hours}>Wednesday 9:00am - 10:00pm</h3>
                            <h3 className={classes.hours}>Thursday 9:00am - 10:00pm</h3>
                            <h3 className={classes.hours}>Friday 9:00am - 10:00pm</h3>
                            <h3 className={classes.hours}>Saturday 9:00am - 10:00pm</h3>
                            <h3 className={classes.hours}>Sunday 9:00am - 10:00pm</h3>


                        </div>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}
export default Contact;
const useStyles = makeStyles((theme) => ({
    root_1: {
        maxWidth: 345,
    },
    root: {
        flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar_1: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    hours: {
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    root_2: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

