
import React from 'react';
import GoogleLogin from 'react-google-login';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const clientId= "YOUR_CLIENT_ID.apps.googleusercontent.com";

function Login( ) {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  return (
    <div id='google-btn'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_orgin'}
        style={{ marginTop: '100px'}}
        isSignedIn={true}
     />
    </div>


  );

};




// function Login() {
//   const handleFailure = (result) => {
//     alert(result);
//   };
//   const handleLogin = (gooleData) => {
//     console.log(googleData)
//   }
//   return (
//     <>
//     <h1>React Google Login App</h1>
//     <GoogleLogin
//     clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//     buttonText="Log in with Google"
//     onSuccess={handleLogin}
//     onFailure={handleFailure}
//     cookiePolicy={'single_host_orgin'}
//     >
//     </GoogleLogin>


//     </>
//   );
// }

export default Login;
