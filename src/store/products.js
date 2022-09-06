const initialState =
  [
    {
      id: 1,
      name: 'Iphone 13 Pro',
      category: 'electronics',
      price: "1000",
      inStock: 5,
      inCart: 1,
      image: 'https://technextgroup.com/wp-content/uploads/2022/03/Tech-Next-Store-iPhone-13-Pro-Starlight1-1.jpg',
    },
    {
      id: 2,
      name: 'Samsung z Flip',
      category: 'electronics',
      price: '950',
      inStock: 10,
      inCart: 1,
      image: 'https://images.samsung.com/uk/smartphones/galaxy-z-flip3-5g/buy/02_Carousel/03-BasicColor/zflip3_carousel_foldunfoldcombo_lavender_mo.jpg',
    },
    {
      id: 3,
      name: 'Samsung z Fold',
      category: 'electronics',
      price: '1100',
      inStock: 2,
      inCart: 1,
      image: 'https://www.xda-developers.com/files/2022/08/Samsung-Galaxy-Z-Fold-4-Burgundy.jpg',
    },
    {
      id: 4,
      name: 'HUAWEI P50 Pro',
      category: 'electronics',
      price: '750',
      inStock: 7,
      inCart: 1,
      image: 'https://khaleejitech.com/wp-content/uploads/2021/07/Huawei-P50-Pro-1.jpg',
    },


    {
      id: 5,
      name: 'Shawerma',
      category: 'food',
      price: 5.75,
      inStock: 90,
      inCart: 1,
      image: 'https://modo3.com/thumbs/fit630x300/97618/1531832280/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7_%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9.jpg',
    },
    {
      id: 6,
      name: 'ٍSnacks',
      category: 'food',
      price: 4.90,
      inStock: 200,
      inCart: 1,
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Cheesesteak-1_637737809615896190.jpg',
    },
    {
      id: 7,
      name: 'Steack',
      category: 'food',
      price: 19.45,
      inStock: 25,
      inCart: 1,
      image: 'https://produits.bienmanger.com/37388-0w470h470_Steack_Extra_Aubrac_160g.jpg',
    },
    {
      id: 8,
      name: 'Chicken Wings',
      category: 'food',
      price: 3.80,
      inStock: 90,
      inCart: 1,
      image: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/4:3/w_1775,h_1331,c_limit/BAS-BEST-HOT-WINGS.jpg',
    },
  ];

// eslint-disable-next-line
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'addToCart':
      return state.map(product => {
        if (product.name === payload.name) {
          return { ...product, inStock: product.inStock - 1 };
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};