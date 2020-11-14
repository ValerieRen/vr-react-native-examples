const initState = {
  items: [],
};

export const list = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};

export default list;
