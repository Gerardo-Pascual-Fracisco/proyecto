import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import TaskItem from '../../components/Categories/TaskItem'
import { getTasks,deleteTask } from '../../api'


const Tasklist = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data.data);
  };
  useEffect(() => {
    loadTasks();
  }, []);

  //Eliminar
  const handleDelete = async (id_category) => {
    await deleteTask(id_category)
    //console.log(id_category)
    await loadTasks()//volver a cargar datos
  }
  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />
  };




  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  })
  return (
    <FlatList
      style={{ width: '100%' }}
      data={tasks}
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
export default Tasklist;
