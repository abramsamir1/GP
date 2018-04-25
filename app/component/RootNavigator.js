import Login from './login';
// import Home from './Home';
import Signup from './Signup';
import Splash from '../common/Splash';
import Profile from './Profile.js';
import {StackNavigator} from 'react-navigation';
import Categories from './Categories.js';
import Products from './Products.js';
import Product from '../common/Product.js';
import Home from './Home.js';
import VisitedPlaces from './VisitedPlaces.js';
const RootNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: ({
      header: null,
    }),
  },
  Product: {
    screen: Products,
    navigationOptions: ({
      header: null,
    }),
  },
  VisitedPlaces: {
    screen: VisitedPlaces,
    navigationOptions: ({
      title: 'Visited Places'
    }),
  },
  SingleProduct: {
    screen: Product,
    navigationOptions: ({
      title : 'Product View',
    }),
  },

  Profile: {
    screen: Profile,
    navigationOptions: ({
      title : 'My profile',
    }),
  },

  Categories: {
    screen: Categories,
    navigationOptions: ({
      title : 'Categories',
    }),
  },

  Loginpage: {
    screen: Login,
    navigationOptions: ({
      title : 'none',
      header: null,
      // headerMode : none,
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({
      title : 'none',
      header: null,
      // headerMode : none,
    }),
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({
      title : 'Register account',
      // headerMode : none,
    }),
  },

});
export default RootNavigator;
