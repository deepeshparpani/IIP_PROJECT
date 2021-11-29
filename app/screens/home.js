import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'

const Home = ({navigation}) => {
    const subjects = [
        { id: 1, name: 'Depression Test', link: 'Depression Test' },
        { id: 2, name: 'Anxiety Test', link: 'Anxiety Test' },
        { id: 3, name: 'Bipolar Test' , link: 'Bipolar Test'},
        { id: 4, name: 'PTSD Test', link: 'PTSD Test' },
        { id: 5, name: 'Addiction Test', link: 'Addiction Test' },
        { id: 6, name: 'Psychosis Test', link: 'Psychosis Test' },
      ];
    
      const cardGap = 16;
    
      const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
    
      return (
        <ScrollView
        style={{
            backgroundColor: 'black',  
           
          }}
        >

          <View
            style={{
             
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {subjects.map((subject, i) => {
              return (
                <View
                  key={subject.id}
                  style={{
                    marginTop: 40,
                    marginLeft: i % 2 !== 0 ? cardGap : 0,
                    width: cardWidth,
                    height: 180,
                    backgroundColor: '#171717',
                    
                    borderRadius: 16,
                    shadowOpacity: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity
                  onPress={ () => navigation.navigate( subject.link ) }
                 
                  
                  >

                    <Text
                    style={{
                        color: 'white',
                       fontSize: 20,
                                      
                    }}
                    >{subject.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      );
}

export default Home

const styles = StyleSheet.create( {
    page: {
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    button: {
        backgroundColor: '#171717',
        width: '44%',
        height: '20%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttontext: {
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
        textAlign: 'center'
    },
    row: {
        height: '100%',
        justifyContent: 'space-between',
        marginVertical: 40,
        marginHorizontal: 30,
        display: 'flex',
        flexDirection: 'row'
    },
    row1: {
        height: '100%',
        justifyContent: 'space-between',
        marginVertical: 40,
        marginHorizontal: 30,
        marginTop: 40
    },
})