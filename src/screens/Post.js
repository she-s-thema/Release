import React from 'react';
import {StyleSheet, ScrollView, View, Text, TextInput, Picker, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Post extends React.Component{
    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                </View>
            </ScrollView>
            )
    }


}
const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            marginTop : 50,
            justifyContent : 'center',
            alignItems : 'center',
        },
        
    }
)
export default Post