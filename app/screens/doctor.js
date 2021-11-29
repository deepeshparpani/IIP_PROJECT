 import React from 'react'
 import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
 import {Linking} from 'react-native'

 
 const doctor = () => 
{
    const subjects = [
        { id: 1, name: 'Dr. BN Pathak', link: '+918874205809' },
        { id: 2, name: 'Dr. Sabhesan S', link: '+919946789023' },
        { id: 3, name: 'Dr. Sameer Gore' , link: '+917087568333'},
        { id: 4, name: 'Dr. Naga Bandikatla Nandini', link: '+919810675332' },
        { id: 5, name: 'Dr. Rahul Bagale', link: '+918823018734' },
        { id: 6, name: 'Dr.Bevin Sathya', link: '+919760923311' },
        { id: 6, name: 'Dr. Umar Mushir', link: '+918259972110' },
        { id: 7, name: 'Dr. Manjunath H', link: '+919045562143' },
        { id: 8, name: 'Dr. Sushil Agarwal', link: '+919944808452' },
        { id: 9, name: 'Dr. Raj Nath Ganjoo', link: '+918807559621' },
        { id: 10, name: 'Dr. Neatu Narang', link: '+919213150234' },
        { id: 11, name: 'Dr. Shobha Krishna', link: '+919267846678' },
        { id: 12, name: 'Dr. Suresh Reddy', link: '+917476479090' },
        { id: 13, name: 'Dr. Swapna B', link: '+917345389808' },
        { id: 14, name: 'Dr. Radhakanth Chundari', link: '+919567578990' },
        { id: 15, name: 'Dr. Raman K', link: '+918970058945' },
        { id: 16, name: 'Dr. Achal Bhagat', link: '+917135590321' },
        { id: 17, name: 'Dr. Srinivas Singisetty', link: '+917409234055' },
        { id: 18, name: 'Dr. Roshan Jain', link: '+918353141495' },
        


      ];
    
      const cardGap = 16;
    
      const cardWidth = (Dimensions.get('window').width - cardGap * 3);
    
      return (
        <ScrollView
        style={{
            backgroundColor: 'black',  
            alignContent: 'center',
            
           
          }}
        >

          <View
            style={{
             
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {subjects.map((subject, i) => {
              return (
                <View
                  key={subject.id}
                  style={{
                    marginTop: 40,
                    marginLeft: i % 1 !== 0 ? cardGap : 0,
                    width: cardWidth,
                    height: 75,
                    backgroundColor: '#171717',
                    
                    borderRadius: 16,
                    shadowOpacity: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity
                  onPress={ () => Linking.openURL(`tel:${subject.link}`) }
                 
                  
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
 
 export default doctor
 
 const styles = StyleSheet.create({})
 