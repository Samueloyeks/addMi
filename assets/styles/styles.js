import { StyleSheet } from 'react-native'
import {Fonts} from '../../src/utils/Fonts'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    default_large_button: {
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        width: 345,
        height: 57,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center', 
        marginTop:10,
    },
    landing_background: {
        // flex: 1,
    },
    landing_image: {
        position: 'absolute',
        top:'15%',
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    default_text: {
        color: '#fff',
        fontFamily: Fonts.PoetsenOne,
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    landing_text: {
        textAlign: 'center',
        fontFamily: Fonts.PoetsenOne,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#fff',
        marginBottom:10,
    },
    default_large_button_text: {
        fontFamily: Fonts.PoetsenOne,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        color: '#FF0000'
    },
    background_image:{
        width:'100%',
        height:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    background_image_default:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'flex-start',
    },
    text:{
        textAlign: 'center',
        fontFamily: Fonts.PoetsenOne,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#fff',
        marginBottom:10,
        // marginTop:100,
    },
    social_container:{
        width:100,
        height:100,
        backgroundColor:'white',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        display:'flex',
        margin:10,
    },
    social_image:{
        width:80,
        height:80,
    },
    large_container:{
        marginTop:100,
        marginHorizontal:20,
    },
    social_modal:{
        backgroundColor:'black',
        paddingTop:120
    },
    social_containers:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    }

})

