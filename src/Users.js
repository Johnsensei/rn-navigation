import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

const Users = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {id, codeName} = route.params;

    return(
        <View>
            <Text>ID: {id}</Text>
            <Text>Code Name: {codeName}</Text>
            <Button
                title='Go Back'
                onPress={() => navigation.navigate('Home',
                    {
                        active: 'yes'
                    }
                )}
            />
        </View>
    );
}

export default Users;