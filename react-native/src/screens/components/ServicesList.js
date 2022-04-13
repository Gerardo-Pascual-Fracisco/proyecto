import React,{useState,useEffect} from "react";
import { FlatList,RefreshControl} from "react-native";
import ItemService from './ItemService'
import { getServices } from '../../../api'


const ServicesList= () => {

    const [refreshing, setRefreshing] = React.useState(false);

  const [Services, setServices] = useState([])
  const loadServices = async () => {
    const data = await getServices()
    setServices(data.data);
  };
  useEffect(() => {
    loadServices();
  }, []);

  
  const renderItem = ({ item }) => {

    return <ItemService task={ item }/>;
  };
  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadServices () ;
    setRefreshing(false);
})
  return (
    <FlatList
    style={{ width: '100%'}}
      data={Services}
      keyExtractor={(item) => item.id_service + ""}
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
export default ServicesList;