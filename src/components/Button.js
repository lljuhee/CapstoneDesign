import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #004898;
  padding: 10px;
  margin: 10px 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Button = ({title, onPress}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
           <Container>
                <Text style={{fontSize:20, color:"white"}}>
                    {title}
                </Text>
            </Container>
        </TouchableOpacity>
    );
};
export default Button;
