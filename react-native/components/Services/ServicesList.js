import React,{useState,useEffect} from "react";
import { FlatList,RefreshControl} from "react-native";
import SerrvicesItem from '../../components/Services/ServicesItem'
import CarouselImages from '../../components/Categories/CarouselImages'
import { getServices} from '../../api'
import ServicesScreen from '../../src/screens/ServicesScreen'


const ServicesList = () => {

    const [refreshing, setRefreshing] = React.useState(false);

  const [Services, setServices] = useState([])
  
  const loadServices = async () => {
    const data = await getServices()
    setServices(data.data);
  };
  useEffect(() => {
    loadServices();
  }, []);

  //Eliminar
  const handleDelete = async (id_service) => {
    await deleteService(id_service)
      //console.log(id_category)
    await loadServices ()//volver a cargar datos
}
  const renderItem = ({ item }) => {
 return <SerrvicesItem Service={ item }handleDelete={handleDelete} />
        
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
