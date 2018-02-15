import { combineReducers } from 'redux';
import categoryList from './category_list';
import categoryReducer from './categoryReducer';
import locationReducer from './locationReducer';
import symptomsReducer from './symptomsReducer';
import chosenSymptomsReducer from './chosenSymptomsReducer';

export default combineReducers({
  categories: categoryList,
  category: categoryReducer,
  location: locationReducer,
  symptoms: symptomsReducer,
  chosenSymptoms: chosenSymptomsReducer,
});