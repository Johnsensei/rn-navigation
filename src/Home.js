import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = (props) => {

    console.log(props);

    return(
        <View>
            <Text>Home on the Range</Text>
            <Button
                title='Go to Users'
                onPress={() => props.navigation.navigate('Users')}
            />
        </View>
    );
}

export default Home;