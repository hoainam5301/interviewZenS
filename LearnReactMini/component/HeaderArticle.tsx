import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const HeadersArticle = () => (
  <View style={{marginTop: 12}}>
    <View style={styles.section}>
      <View style={{flexDirection: 'row', marginLeft: 12}}>
        <Image
          source={require('../assets/HN.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={{flexDirection: 'row', marginRight: 12}}>
        <View
          style={{
            marginRight: 12,
            justifyContent: 'flex-end',
          }}>
          <Text style={{color: 'gray'}}>johndoe@example.com</Text>
          <Text style={{textAlign: 'right'}}>Paul</Text>
        </View>
        <Image
          source={require('../assets/image2.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
    <View
      style={{
        height: 120,
        backgroundColor: '#03C988',
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 24,
      }}>
      <Text style={{color: 'white', marginBottom: 12, fontSize: 20}}>
        A joke a day keeps the doctor away
      </Text>
      <Text style={{color: 'white'}}>
        If you joke wrong way, your teeth have to pay. (Serious)
      </Text>
    </View>
  </View>
);
export default HeadersArticle;

const styles = StyleSheet.create({
  section: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    height: 32,
    width: 32,
    borderRadius: 24,
  },
});
