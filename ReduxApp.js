import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FoodForm from './src/redux/FoodForm';
import FoodList from './src/redux/FoodList';

const AppStack = createStackNavigator({
  FoodForm: FoodForm,
  FoodList: FoodList,
});

export default createAppContainer(AppStack);
