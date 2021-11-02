import React, {useState,useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Show } from '../interfaces'
import axios, {AxiosResponse} from 'axios';








const Home = ({Navigation}) => {
 
const [showData,setShowData]= useState <Show[]>([]);
const [searchfeild, setSearchfeild] = useState('');

useEffect(() => {
axios
.get<Show>('https://api.tvmaze.com/search/shows?q=girls')
.then((response:AxiosResponse) => {
  console.clear();
  console.log ('response:', response.data)
  setShowData(response.data)
})

}, []);

  return(

    <View>
       <ScrollView>
      <View style={styles.container}>
        {showData
          .filter(showData =>
            showData.id
          )
          .map((showData, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                style={styles.card}
                onPress={() => Navigation.navigate('Details')}
                  
                >
               
                <Text>{showData.id}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>


    <View style={styles.searchCont}>
      <TextInput
        style={styles.searchfeild}
        placeholder="Search Tv Show"
        onChangeText={value => setSearchfeild(value)}
        value={searchfeild}
      />
      
    </View>
    <button></button>
   
  </View>
  )
};





const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 70,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor: '#0000cd',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#ffc0cb',
    borderRadius: 50,
    
    
  },
  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10,
  },
  searchfeild: {
    height: 50,
    borderWidth: 3,
    borderColor: '#0000cd',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
    marginTop:35
  
  },
});

export default Home;
