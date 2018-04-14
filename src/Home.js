import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getUserPosts } from './actions/HomeActions';
import { Header, Left, Body, Title } from 'native-base';
import HomeCard from '../src/HomeCard';
import SearchBar from '../src/SearchBar';
import Spinner from './common/Spinner';


class Home extends Component {
componentWillMount() {
  this.props.getUserPosts();
}

renderFlatList() {
if (this.props.posts.loading === 'false') {
  return (
              <FlatList
                data={this.props.posts.data.products}
                renderItem={({ item, index }) => {
                  console.log(`item = ${JSON.stringify(item)} , index= ${item.id}`);
                  return (
                    <HomeCard item={item} index={index} />
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
        <SearchBar />
      </Header>

        {this.renderFlatList()}
        <Text style={styles.errorTextStyle}>{this.props.posts.error}</Text>
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
const posts = state.homePost;
console.log('posts', posts);
return { posts };
};


export default connect(mapStateToProps, { getUserPosts })(Home);
