import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';




const Details = (props: { navigation: { state: any; }; }) => {
    const [details, setDetails] = useState([]);
  
    useEffect(() => {
      fetchTvDetails();
    }, []);
  
    const fetchTvDetails = () => {
      const {state} = props.navigation;
      fetch(`https://api.tvmaze.com/search/shows?q=girls`)
        .then(res => res.json())
        .then(details => setDetails(details));
    };
  
    return details ? (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={{
            uri: `https://api.tvmaze.com/search/shows?q=girls`,
          }}
        />
        <Text style={styles.text}> {details}</Text>
        
        <Text style={styles.text}>
          Ability: {details}
        </Text>
        <Text style={styles.text}>Type: {details}</Text>
      </View>
    ) : (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#E63F34" />
      </View>
    );
  };



  const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 250,
      backgroundColor: '#ffb6c1',
      borderRadius: 50,
    },
    text: {
      fontSize: 30,
      marginBottom: 20,
      
    },
    indicator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
  });


  export default Details;