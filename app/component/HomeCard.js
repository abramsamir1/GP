import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { saveRate } from '../actions/HomeActions';
import { fullStar } from 'react-native-vector-icons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import StarRating from 'react-native-stars-rating';

class HomeCard extends Component {


  constructor(props) {
  super(props);
  this.state = {
    generalStarCount: 3.5,
    customStarCount: 2.5,
  };
}

onGeneralStarRatingPress(rating) {
  this.setState({
    generalStarCount: rating,
  });
}

onCustomStarRatingPress(rating) {
  this.setState({
    customStarCount: rating,
  });
  console.log('rating', rating);
}

renderSaveRate(rating) {
  console.log('rating', rating);
  const user_id = 1;
  this.props.saveRate({ user_id ,product_id: this.props.item.id, rate_number: rating , description: this.props.item.description});
}


render() {

console.log('place_name', this.props.item.place_name);
  return (
  <View>

    <CardItem>
        <Left>
            <Thumbnail source={{uri:this.props.item.shop_image}} />
            <Body>

                  <Text>{this.props.item.place_name}</Text>
                  <Text>{this.props.item.date}</Text>
            </Body>
        </Left>
    </CardItem>

    <CardItem>
          <Image source={{uri:this.props.item.product_image}} style={{ height: 200, width: null, flex: 1}}/>
    </CardItem>

    <CardItem>
          <Text>{this.props.item.description}</Text>
    </CardItem>

    <CardItem>
          <Text style={styles.textStyle}>Avg: {this.props.item.rate_number}/5</Text>
          <StarRating
          isActive={false}
          rateMax={5}
          isHalfStarEnabled={false}
          onStarPress={rating => this.renderSaveRate(rating)}
          rate={0}
          size={45}
          rating = {0}
          />
     </CardItem>
  </View>
  );
}

}


const styles = {
  starStyle: {
    alignItems: 'start',
    paddingLeft: 20,
    paddingRight: 20
  },
  textStyle: {
    paddingRight:20
  }
};

const mapStateToProps = state => {
const rate = state.homePost;
return { rate };
};


export default connect(mapStateToProps, { saveRate })(HomeCard);
