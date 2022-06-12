
import * as actionType from  "../constants/actionTypes"
import * as api from "../api/api";
///////////// showLaptops///////////////////////////////////////////////////
export const showLaptops = () => async (dispatch) => {
  try {
    dispatch({
      type: actionType.FETCH_LAPTOPS_PENDING,
    });
    const response = await api.getLaptops();

    dispatch({
      type: actionType.FETCH_LAPTOPS_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: actionType.FETCH_LAPTOPS_REJECTED,
      payload: err.message,
    });
  }
};

///////////////////////addLaptop/////////////////////////////////////////////////////
export const addLaptop = (laptop) => async (dispatch) => {
  try {
    dispatch({type: actionType.ADD_LAPTOP_PENDING })

    const response = await api.postLaptop(laptop);

    dispatch({
      type: actionType.ADD_LAPTOP_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
        type: actionType.ADD_LAPTOP_REJECTED,
        payload: err.message,
      });
  }
};
//////////////////////////////////updateLaptop//////////////////////////////////////////
export const updateLaptop = (id, Updatedlaptop) => async (dispatch) => {
  try {
    dispatch({type: actionType.UPDATE_LAPTOP_PENDING })
    const response = await api.putLaptop(id,Updatedlaptop);
    
    dispatch({
      type: actionType.UPDATE_LAPTOP_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionType.UPDATE_LAPTOP_REJECTED,
      payload: err.message,
    });
  }
};

//////////////////////////////////deleteLaptop//////////////////////////////////////////
export const removeLaptop = (id) => async (dispatch) => {
  try {
    dispatch({type: actionType.DELETE_LAPTOP_PENDING })
    const response = await api.deleteLaptop(id);
    
    dispatch({
      type: actionType.DELETE_LAPTOP_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionType.DELETE_LAPTOP_REJECTED,
      payload: err.message,
    });
  }
};