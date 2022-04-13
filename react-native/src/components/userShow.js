import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import { getUser } from '../api/api_user'
import EditProfileScreen from "../screens/EditProfileScreen";


const userShow = () => {

    const [refreshing, setRefreshing] = React.useState(false);

    const [tasks, setUser] = useState([])
    const loadUser = async () => {
        const data = await getUser()
        setUser(data.data);
    };
    useEffect(() => {
        loadUser();
    }, []);

    const renderItem = ({ item }) => {

        return EditProfileScreen; 
    };
    const onRefresh = React.useCallback(async () => {

        setRefreshing(true);
        await loadUser();
        setRefreshing(false);
    })
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id + ""}
            renderItem={renderItem}

            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    colors={["#78e08f"]}
                    onRefresh={onRefresh}
                    progressBackgroundColor="#000"
                />
            }
        />
    );
};
export default userShow;