import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getUserPosts } from '../actions/HomeActions';
import { Header, Left, Body, Title, Container, Content } from 'native-base';
import HomeCard from './HomeCard';
import {Spinner } from '../common/Spinner.js';
import Appfooter from '../common/Appfooter.js';

class Home extends Component {
componentWillMount() {
  this.props.getUserPosts();
}

renderFlatList() {
if (this.props.posts.loading === 'false') {
  return (
              <FlatList
                data={this.props.posts.data.products}
                keyExtractor={(item, index ) => item.id }
                renderItem={({ item, index }) => {
                  console.log(`item = ${JSON.stringify(item)} , index= ${item.id}`);
                  return (
                    <HomeCard item={item} index={index}  />
                  );
                }}
              />
            );
    }
    return <Spinner size='large' />
}

  render() {
    return (
      <Container>
        <Content>
        {this.renderFlatList()}
        <Text style={styles.errorTextStyle}>{this.props.posts.error}</Text>
        </Content>
        <Appfooter navigation = {this.props.navigation} />
      </Container>
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
const posts = state.homePost;
console.log('posts', posts);
return { posts };
};


export default connect(mapStateToProps, { getUserPosts })(Home);
