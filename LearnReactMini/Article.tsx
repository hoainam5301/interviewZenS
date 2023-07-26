import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import HeadersArticle from './component/HeaderArticle';

class Article extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          content: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
          reaction: null,
        },
        {
          id: 1,
          content: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
          reaction: null,
        },
        {
          id: 2,
          content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
          reaction: null,
        },
        {
          id: 3,
          content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
          reaction: null,
        },
      ],
      article: null,
      isFull: false,
    };
  }

  changeArticle = () => {
    const {data, article}: any = this.state;
    const index = data.findIndex((ele: any) => ele.reaction === null);
    if (index !== -1) {
      this.setState({
        article: data[index],
      });
    } else {
      this.setState({
        isFull: true,
      });
    }
  };

  reactionArticle = (reactTion: any) => {
    const {data, article}: any = this.state;
    const tempData = [...data];
    6;
    tempData[article.id].reaction = reactTion;
    this.setState({
      data: tempData,
    });
  };

  componentDidMount() {
    const {data}: any = this.state;
    this.setState({
      article: data[0],
    });
  }

  componentWillUnmount() {}

  render() {
    const {article, isFull}: any = this.state;
    return (
      <View style={{flex: 1}}>
        <HeadersArticle />
        <View
          style={{
            marginTop: 56,
          }}>
          {isFull ? (
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 12,
                fontSize: 18,
                color: '#676767',
              }}>
              "That's all the jokes for today! Come back another day!"
            </Text>
          ) : (
            <Text
              style={{
                textAlign: 'left',
                paddingHorizontal: 24,
                fontSize: 14,
                color: '#676767',
              }}>
              {article?.content}
            </Text>
          )}
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={{justifyContent: 'flex-end'}}>
            {!isFull && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: 48,
                  marginHorizontal: 16,
                }}>
                <TouchableOpacity
                  style={styles.buttonLike}
                  onPress={() => {
                    this.reactionArticle('like');
                    this.changeArticle();
                  }}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    This is Funny!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonDisLike}
                  onPress={() => {
                    this.reactionArticle('dislike');
                    this.changeArticle();
                  }}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    This is not Funny.
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <View
              style={{
                height: 0.2,
                width: '100%',
                backgroundColor: 'gray',
                alignSelf: 'center',
                flexDirection: 'row',
              }}
            />

            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                marginBottom: 12,
                marginTop: 8,
                paddingHorizontal: 12,
                color: '#A7A7A7',
              }}>
              This appis created as part of Hlsolutions program.The materials
              contained on this website are provided for general information
              only and do not consititute any from of advice. HLS assumes no
              responsibility for the accuracy of any particular statement and
              accepts no libility for any loss or damage which may arise from
              reliance on the information cont on this site.
            </Text>
            <Text style={{textAlign: 'center', fontSize: 13, color: '#7F7F7F'}}>
              Copyright 2021 HLS
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Article;

const styles = StyleSheet.create({
  buttonLike: {
    height: 32,
    width: 130,
    backgroundColor: '#2C7EDB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  buttonDisLike: {
    height: 32,
    width: 130,
    backgroundColor: '#29B363',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});
