import React, { Component } from 'react';
import styles from '../../../assets/styles/styles';
import { Platform, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ImageBackground, StatusBar, Modal } from 'react-native';
import facebook_img from '../../../assets/img/facebook.png';
import twitter_img from '../../../assets/img/twitter.png';
import instagram_img from '../../../assets/img/instagram.png';
import linkedIn_img from '../../../assets/img/linkedIn.png';
import snapchat_img from '../../../assets/img/snapchat.png';
import manualAuth_img from '../../../assets/img/manualAuth.png';
import google_img from '../../../assets/img/google.png';
import FBSDK, { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';
// import {FirebaseService} from '../../providers/firebase-service/firebase-service';
// import firebase from 'firebase';


export default class CreateProfilePage extends Component {
    // async conponentWillMount() {
    //     var config = {
    //         apiKey: "AIzaSyBatsWUoLn6ScgDUzhnuakiVqW_my52ZD4",
    //         authDomain: "addmi-fe3b5.firebaseapp.com",
    //         databaseURL: "https://addmi-fe3b5.firebaseio.com",
    //         projectId: "addmi-fe3b5",
    //         storageBucket: "",
    //         messagingSenderId: "918110733571",
    //         appId: "1:918110733571:web:f1991f9c9b2d6ffd"
    //     };

    //     if (!firebase.apps.length) {
    //         firebase.initializeApp(config);
    //     }

    //     this.auth = firebase.auth();
    //     this.db = firebase.database();

    //     this.googleProvider = new firebase.auth.GoogleAuthProvider();
    //     this.facebookProvider = new firebase.auth.FacebookAuthProvider();

    //     doCreateUserWithEmailAndPassword = (email, password) =>
    //         this.auth.createUserWithEmailAndPassword(email, password);
 
    //     doSignInWithEmailAndPassword = (email, password) =>
    //         this.auth.signInWithEmailAndPassword(email, password);

    //     doSignInWithGoogle = () =>
    //         this.auth.signInWithPopup(this.googleProvider);

    //     doSignInWithFacebook = () =>
    //         // this.auth.signInWithPopup(this.facebookProvider);
    //         alert('it shows')
 
    //     doSignOut = () => this.auth.signOut();
    // }
 


    async facebookLogin() {
        try {
            let result = await LoginManager.logInWithPermissions(['public_profile']);
            if (result.isCancelled) {
                alert('Login was cancelled')
            } else {
                alert('login was succesful with permissions: ' + result.grantedPermissions.toString())
            }
        } catch (err) {
            alert(err)
        }
    }


    render() {
        return (
            <ImageBackground source={require('../../../assets/img/background_image.png')} imageStyle={{ resizeMode: 'stretch' }} style={styles.background_image_default}>
                <StatusBar
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0.20)"
                    animated
                    barStyle="light-content"
                />
                <View style={styles.large_container}>
                    <Text style={styles.text}>Select an option below to complete your digital profile</Text>

                    <View style={styles.social_containers}>
                        <TouchableOpacity onPress={this.facebookLogin}>
                            <View style={styles.social_container}>
                                <Image source={facebook_img} style={styles.social_image}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.social_container}>
                                <Image source={twitter_img} style={styles.social_image}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.social_container}>
                                <Image source={instagram_img} style={styles.social_image}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.social_containers}>
                        <TouchableOpacity>
                            <View style={styles.social_container}>
                                <Image source={linkedIn_img} style={styles.social_image}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.googleLogin}>
                            <View style={styles.social_container}>
                                <Image source={google_img} style={styles.social_image}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.social_container}>
                                <Image source={snapchat_img} style={styles.social_image}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.social_containers}>
                        <TouchableOpacity>
                            <View style={styles.social_container}>
                                <Image source={manualAuth_img} style={styles.social_image}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
                </View>
            </ImageBackground>
        )
    }
}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBatsWUoLn6ScgDUzhnuakiVqW_my52ZD4",
//     authDomain: "addmi-fe3b5.firebaseapp.com",
//     databaseURL: "https://addmi-fe3b5.firebaseio.com",
//     projectId: "addmi-fe3b5",
//     storageBucket: "",
//     messagingSenderId: "918110733571",
//     appId: "1:918110733571:web:f1991f9c9b2d6ffd"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>