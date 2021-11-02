import React from 'react';
import { Text, View, Button } from 'react-native';

const Users = (props) => {
    return(
        <View>
            <Text>The Users are Here</Text>
            <Button
                title='Go Back'
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );
}

export default Users;