import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const HeadersArticle = () => (
  <View style={{marginTop: 12}}>
    <View style={styles.section}>
      <View style={{flexDirection: 'row', marginLeft: 12}}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginRight: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginRight: 6,
            justifyContent: 'flex-end',
          }}>
          <Text style={{color: 'gray', fontSize: 10}}>Handicrafted by</Text>
          <Text style={{textAlign: 'right', fontSize: 12}}>Jim HLS</Text>
        </View>
        <Image
          source={require('../assets/daidien.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
    <View
      style={{
        height: 130,
        backgroundColor: '#29B363',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
      }}>
      <Text style={{color: 'white', marginBottom: 12, fontSize: 18}}>
        A joke a day keeps the doctor away
      </Text>
      <Text style={{color: 'white', marginTop: 16, fontSize: 12}}>
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
    height: 44,
    width: 44,
    borderRadius: 24,
  },
});
