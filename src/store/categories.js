const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
  
    ],
    activeCategory: 'electronics',
  };
  // eslint-disable-next-line
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'change':
        return { categories: state.categories, activeCategory: payload };
      default:
        return state;
    }
  };
  
  export const changeActiveCategory = category => {
    return {
      type: 'change',
      payload: category,
    };
  };