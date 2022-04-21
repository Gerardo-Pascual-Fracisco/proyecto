import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import CategoryItem from './CategoryItem'
import { getCategories, deleteTask } from '../../api'


const CategoriesList = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const [categories, setcategories] = useState([])

  const loadcategories = async () => {
    const data = await getCategories()
    setcategories(data.data);
  };
  useEffect(() => {
    loadcategories();
  }, []);


  const renderItem = ({ item }) => {
    return <CategoryItem task={item} />
  };




  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadcategories();
    setRefreshing(false);
  })
  return (
    <FlatList
      style={{ width: '100%' }}
      data={categories}
      keyExtractor={(item) => item.id_category + ""}
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
export default CategoriesList;
