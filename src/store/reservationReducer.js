const initialState = {
    username: '',
    selectedItem: '',
    selectedDate: '',
    selectedCity: '',
  };

  const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return { ...state, username: action.payload };
        default:
      return state;
  }
};

export default reservationReducer;