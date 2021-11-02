import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = (props) => {

    console.log(props);

    return(
        <View>
            <Text>Home on the Range</Text>
            <Text>
                {props.route.params ?
                props.route.params.active :
                null}
            </Text>
            <Button
                title='Go to Users'
                onPress={() => props.navigation.navigate('Users', {
                    // id: 23,
                    // codeName: 'Black Mamba'
                })}
            />
        </View>
    );
}

export default Home;