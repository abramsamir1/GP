import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { getUserPlaces } from './actions/VisitedPlacesActions';
import { Header, Left, Body, Title, Right } from 'native-base';
import VisitedPlacesItem from './VisitedPlacesItem';
import Spinner from './common/Spinner';

class VisitedPlaces extends Component {

  componentWillMount() {
    const user_id = 1;
    this.props.getUserPlaces({ user_id });
  }

  renderFlatList() {
    console.log('this.props.places.loading', this.props.places.loading);
  if (this.props.places.loading === 'false') {
    return (
      <FlatList
        data={this.props.places.data.products}
        renderItem={({ item, index }) => {
          console.log(`item = ${JSON.stringify(item)} , index= ${item.id}`);
          return (
            <VisitedPlacesItem item={item} index={index} />
          );
        }}
      />
              );
      }
      return <Spinner size='large' />
  }

  render() {
      return (
        <View style={{ flex: 1 }}>

            <Header>
              <Left />
              <Body>
                <Title>Visited places</Title>
              </Body>
              <Right />
            </Header>

        {this.renderFlatList()}
        <Text style={styles.errorTextStyle}>{this.props.places.error}</Text>
        </View>
      );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
const places = state.visitedPlaces;
console.log('places', places);
return { places };
};

export default connect(mapStateToProps, { getUserPlaces })(VisitedPlaces);
