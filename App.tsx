import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import React from 'react'

export default function App() {
  const contacts=[{
    id:1,
    img:require('./what1.jpg'),
    name:'Energy',

  },
  {
    id:2,
    img:require('./what2.jpg'),
    name:'Francis',
 
  },
{
  id:3,
  img:require('./what3.jpg'),
    name:'John',

},
{
  id:4,
  img:require('./twit.1.jpg'),
    name:'  Favour',

},
{
  id:5,
  img:require('./twit.4.jpg'),
  name:'Don',

},
{
  id:6,
  img:require('./what7.png'),
  name:'Joy',

},
{
  id:7,
  img:require('./what4.jpg'),
  name:'Energy',

},
{
  id:8,
  img:require('./what5.jpg'),
  name:'Energy',

},
{
  id:9,
  img:require('./what6.png'),
  name:'Energy',

},
{
  id:10,
  img:require('./what3.jpg'),
  name:'Energy',

},
]
  return (
    <ScrollView showsVerticalScrollIndicator>
      <View    style={styles.container}>
        <View >
          <Text style={styles.headerText}>Chats</Text>
         
             </View>
          <View style={styles.subHeader}>
            <Text style={styles.broadText}>Broadcast Lists</Text>
            <Text style={styles.broadText}> New Group</Text>
            </View> 
            <View   style={styles.arciveText}>
              <Text style={styles.subArcive}>Archived</Text>
              <Text style={styles.subText}>4</Text>
            </View>
          {contacts.map(({name,img,id})=>(
            <View  key={id} style={styles.chatContainer}>
              <View>
                <View style={styles.imageText}>
              <Image 
              source={(img)}

              style={styles.chatImage}
              />

              <View >
                <Text  style={styles.personName}>{name}</Text>
                <Text style={styles.chatDetails}>Last chat</Text>
              </View>
              </View>
              
              </View>
              
              <Text> yesterday</Text>
              </View>
            ))
            }
          
     

      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{},
  headerText:{
    fontSize: 30,
    fontWeight: 'bold',
    color:'black',
    padding:8,
  },
  button:{},
  subHeader:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:6,
    fontSize:10,
  },
  personName:{
    color:'black',
    fontSize:16,
    fontWeight:'bold',
    },
  broadText:{
    color:'blue',
  },
  arciveText:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:6,
    paddingVertical:10,
    borderBottomWidth:1,
    },
  subArcive:{
    fontSize:20,
    fontWeight:'bold',
  },
  chatDetails:{
    padding:10,
    marginRight:10,
    borderBottomWidth:1,
    color:'red',
  },
  subText:{
    color:'blue',
  },
  chatContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
  },
  chatImage:{
    width:60,
    height:60,
    borderRadius:60/2,
  },
  imageText:{
    flex:1,
    flexDirection:'row',
  }
  ,


})