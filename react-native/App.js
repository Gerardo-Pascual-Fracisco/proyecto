import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      url: 'http://127.0.0.1:8000/api/category'
    };
  }
  
  getUser() {
    fetch(this.state.url)
    .then(res => res.json())
    .then((datoL) => {
      
      console.log(datoL)
      this.setState({
        data: datoL,
        isloading: true,
      })
      .catch(console.log)
     }
    );
  }

  componentDidMount() {
    //this.getPokemon();
    this.getUser();
  }
   
  render() {
    const{isloading, data}=this.state
   if(!isloading){
    return (
      <View style={styles.container}>
        <Text>Descargando pokedes</Text>
      </View>
    );
   }
   return (
    <View style={{flex: 1, paddingTop: 50,paddingLeft:5 }}>
      <Text>Lista de pokemon</Text>
     
      <FlatList
      data={this.state.data}
      renderItem={
        ({item})=> <Text>{item.id_category} {item.Name} </Text>
      }
      keyExtractor={(item, index) => index.toString()}
      />
      
     {data.map(
       (data)=>(
         
          <Text key={data.id_category}>{data.id_category}{data.Name}</Text>
         
       )
     )}
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});