import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import styles from '../../../assets/styles/styles';
import add_user_image from '../../../assets/img/add_user_large.png';

export default class LandingPage extends Component {

    render() {
        return (
            <ImageBackground source={require('../../../assets/img/background_image.png')} imageStyle={{ resizeMode: 'stretch' }} style={styles.background_image}>
                <StatusBar
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0.20)"
                    animated
                    barStyle="light-content"
                />
                <Image source={add_user_image} style={styles.landing_image}></Image>
                <Text style={styles.landing_text}>Sharing digital profiles is 10x</Text>
                <Text style={styles.landing_text}>easier and faster with AddMi</Text>

                <TouchableOpacity style={styles.default_large_button}
                    onPress={() =>
                        this.props.navigation.navigate('CreateProfilePage')
                    }>
                    <Text style={styles.default_large_button_text}>Get Started!</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}
