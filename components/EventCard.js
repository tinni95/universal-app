import React from "react";
import {Platform,StyleSheet,View, Text, Image, TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements';

export default class EventCard extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <TouchableOpacity>
            <View style={styles.DiscoverContainer}>
                <Image style={styles.DiscoverImage} source={{uri:this.props.image}}/>
                <Image style={styles.UserImage} source={{uri:this.props.UserImage}}/>
                <View>
                <Text style={styles.Title}> {this.props.Title}</Text>
                <Text style={styles.Owner}> {this.props.FullName}</Text>
                </View>
                <View style={styles.footer}>
                <Text style={styles.Location}>@{this.props.Location}</Text>
                <View style={{flexDirection: 'row',paddingLeft:10,paddingTop:15,justifyContent: 'space-between'}}>
                    <View style={{flexDirection:"row"}}>
                    <Icon containerStyle={{marginRight:14,marginTop:-6}} size={30} color="black" name='ios-calendar' type='ionicon' />
                    <Text style={styles.Date}>{this.props.date}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                    <Icon containerStyle={{marginTop:-6}} size={30} color="black" name='ios-clock' type='ionicon' />
                    <Text style={styles.Time}>{this.props.time}</Text>
                    </View>
                </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    UserImage:{
      width:100,
      height:100,
      position:"absolute",
      right:10,
      borderRadius:50,
      top:95,
    },
    addtext:{
      color:'white',
      fontSize:22,
    },
    DiscoverImage:{
      backgroundColor: '#ccc',
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      borderRadius:10,
     },
    add:{
      alignItems:'center',
      position: 'absolute',
      top:0,
      right:0,
      backgroundColor:"black",
      marginTop:30,
      marginRight:15,
      height:30,
      width:30,
      borderRadius:15,
    },
    container: {
      flex: 1,
      zIndex:999,
      height:2000,
    },
    contentContainer: {
      paddingTop: 30,
    },
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin:5,
      paddingTop:22.5,
    },
    navigationFilename: {
      marginTop: 20,
    },
    DiscoverContainer: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin:10,
      height:330,
      borderRadius:10,
      borderWidth: 0.1,
      borderColor: 'gray',
    },
    helpLink: {
      paddingVertical: 15,
      alignItems:'center'
    },
    Discover: {
      fontSize:32,
      width:"100%",
      fontWeight:'bold',
    },
    Title: {
      fontSize:30,
      margin:10,
      fontWeight:'bold',
      color:'white',
    },
    Owner: {
      fontSize:17,
      marginLeft:12.5,
      color:'white',
    },
    Location: {
      fontSize:18,
      marginLeft:10,
      marginBottom:5,
      color:'black',
      fontWeight:'bold',
    },
    Time: {
      fontSize:18,
      color:'black',
      marginLeft:15,
      marginRight:10,
      marginBottom:5,
      fontWeight:'bold',
    },
    Date:{
      fontSize:18,
      color:'black',
      fontWeight:'bold',
    },
    footer:{
      ...Platform.select({
        ios: {
        justifyContent:"flex-end",
        marginBottom:10
        },
        android: {
        marginTop:145,
        },
      }),
    },
    loading:{
      backgroundColor: '#ccc',
      flex: 1,
      position: 'absolute',
      width: 120,
      justifyContent: 'center',
      borderRadius:10,
    },
    tabBarInfoContainer: {
      position: 'absolute',
      top: 160,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
         shadowColor: 'black',
         shadowOffset: { height: -3 },
         shadowOpacity: 0.1,
         shadowRadius: 3,
        },
        android: {
         elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    header: {
      fontSize:32,
      fontWeight:'bold',
    },
    headerContainer:{
      marginLeft:10,
      marginTop:10
    }
    });