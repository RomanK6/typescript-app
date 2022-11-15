import React, { useEffect } from "react";
import styles from "./Login.module.scss";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { googleOAuth2 } from "../../redux/google-reducer";
import { redusersType } from "../../redux/store";
import { connect } from 'react-redux';
import { gapi } from 'gapi-script';


interface ILogin {
    googleOAuth2: () => void;
    googleReducer: any
}

const Login: React.FC<ILogin> = (props) => {
    debugger
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: clientId,
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
    }, []);
    
    
    if (/*props.googleReducer === [] && */props.googleReducer.length === 0) {
        return <div className={styles.header_wrapper}>
        <h1>Login</h1>
        <GoogleLogin
            clientId={'' && clientId}
            buttonText="Login"
            onSuccess={props.googleOAuth2}
            onFailure={props.googleOAuth2}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
        </div>
    }
    
    return <div className={styles.header_wrapper}>
        <h1>You logined as: {props.googleReducer.profileObj.email}</h1>
    <GoogleLogout 
            clientId={'' && clientId}
            buttonText="Logout"
            onLogoutSuccess={props.googleOAuth2}
        />
    </div>
}

const mapStateToProps = (state: redusersType) => {
    return {...state}
}

export default connect( mapStateToProps, { googleOAuth2 } )(Login);