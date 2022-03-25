import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = props =>{
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style = {{backgroundColor :"#004898", padding:10, margin:10 }}>
                <Text style={{fontSize:20, color:"white"}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export default MyButton;
