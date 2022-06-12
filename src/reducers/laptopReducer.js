import * as actionType from  "../constants/actionTypes"
const initialState = {
  err: "",
  fetching: false,
  fetched: false,
  laptop: {
    title: "",
    cover: "",
    brand: "",
    cpu: "",
    gpu: "",
    ssd_memory: "",
    ram_memory: "",
    os: "",
    price: "",
  },

  allLaptops: [],
};

const laptopReducer = (state = initialState, { type, payload }) => {
 
  switch (type) {
    case actionType.FETCH_LAPTOPS_PENDING:
      return { ...state, fetched: false, fetching: true };
    case actionType.FETCH_LAPTOPS_FULFILLED:
      return { ...state, allLaptops: payload, fetched: true, fetching: false };
    case actionType.FETCH_LAPTOPS_REJECTED:
      return { ...state, fetched: false, fetching: false, err: payload };
    //////////////////////////////////////////////////////////////////////////////////////
    case actionType.ADD_LAPTOP_PENDING:
      return { ...state, fetched: false, fetching: true };
    case actionType.ADD_LAPTOP_FULFILLED:
      return { ...state, laptop: payload, fetched: true, fetching: false };
    case actionType.ADD_LAPTOP_REJECTED:
      return { ...state, fetched: false, fetching: false, err: payload };
    //////////////////////////////////////////////////////////////////////////////////////////////
    case actionType.UPDATE_LAPTOP_PENDING:
      return { ...state, fetched: false, fetching: true };
    case actionType.UPDATE_LAPTOP_FULFILLED:
     const updatedLaptop = state.allLaptops.map((laptop)=>laptop._id === payload._id ? payload:laptop)
      return { ...state, laptop: updatedLaptop, fetched: true, fetching: false };
    case actionType.UPDATE_LAPTOP_REJECTED:
      return { ...state, fetched: false, fetching: false, err: payload };
    //////////////////////////////////////////////////////////////////////////////////////////////
    case actionType.DELETE_LAPTOP_PENDING:
      return { ...state, fetched: false, fetching: true };
    case actionType.DELETE_LAPTOP_FULFILLED:
     
      return { ...state, laptop: payload, fetched: true, fetching: false, allLaptops : state.allLaptops.filter((laptop)=>laptop._id !== payload._id)};
    case actionType.DELETE_LAPTOP_REJECTED:
      return { ...state, fetched: false, fetching: false, err: payload };

    default:
      return state;
  }
};
export default laptopReducer;
