import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { useIsDrawerOpen} from '@react-navigation/drawer'

const Users = () => {
    // const isDrawerOpen = useIsDrawerOpen();
    const navigation = useNavigation();
    const route = useRoute();
    const {id, codeName} = route.params;

    useEffect( () => {
        setTimeout(() => {
            navigation.setOptions({
                headerRight: () =>
                    <Button
                    title='Do More'
                    onPress={() => alert('More')}
                    />,
            })
        }, 2000)
    },[navigation])

    console.log(navigation);
    // alert(isDrawerOpen)

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
            <Button
                title='Change Header'
                onPress={() => navigation.setOptions({
                    title: 'New Header'
                })}
            />
            <Button
                title='Open Drawer'
                onPress={() => navigation.toggleDrawer()}
            />
        </View>
    );
}

export default Users;