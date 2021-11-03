import React from 'react';
import { Text, View, Image } from 'react-native';

import Logo from '../img/johnsensei.png'

const LogoTitle = () => {
    return(
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image
                source={Logo}
                
                // style={{width: 48, height: 48}}
            />
        </View>
    );
}

export default LogoTitle;