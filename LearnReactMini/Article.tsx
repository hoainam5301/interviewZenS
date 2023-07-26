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
          content: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."

The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
          
The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
          reaction: null,
        },
        {
          id: 1,
          content: `Teacher: "Kids,what does the chicken give you?" 
Student: "Meat!" 
Teacher: "Very good! Now what does the pig give you?" 
Student: "Bacon!" 
Teacher: "Great! And what does the fat cow give you?" 
Student: "Homework!"`,
          reaction: null,
        },
        {
          id: 2,
          content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" 
Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
          reaction: null,
        },
        {
          id: 3,
          content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" 
The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." 
The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
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
            flex: 1,
            justifyContent: 'center',
            marginBottom: 64,
          }}>
          {isFull ? (
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 12,
                fontSize: 18,
              }}>
              "That's all the jokes for today! Come back another day!"
            </Text>
          ) : (
            <Text
              style={{
                textAlign: 'justify',
                paddingHorizontal: 12,
                fontSize: 18,
              }}>
              {article?.content}
            </Text>
          )}
        </View>
        {!isFull && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
            }}>
            <TouchableOpacity
              style={styles.buttonLike}
              onPress={() => {
                this.reactionArticle('like');
                this.changeArticle();
              }}>
              <Text style={{color: 'white'}}>This is Funny!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDisLike}
              onPress={() => {
                this.reactionArticle('dislike');
                this.changeArticle();
              }}>
              <Text style={{color: 'white'}}>This is not Funny!</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Article;

const styles = StyleSheet.create({
  buttonLike: {
    height: 40,
    width: 150,
    backgroundColor: '#2192FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 24,
  },
  buttonDisLike: {
    height: 40,
    width: 150,
    backgroundColor: '#7DCE13',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 24,
  },
});
