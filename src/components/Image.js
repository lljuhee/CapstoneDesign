import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
    margin-bottom: 30px;
`;

const LogoImage = styled.Image`
    width: 250px;
    height: 130px;
    border-radius: 50px;

`;

const Image = ({ url }) => {
    return (
        <Container>
            <LogoImage source = {{url: url}}/>
        </Container>
    );
};

Image.propTypes = {
    url: PropTypes.string,
};
  
export default Image;