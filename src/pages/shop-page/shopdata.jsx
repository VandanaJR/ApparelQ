
const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Solid Baseball Cap',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/11/25e72455-7aa5-4bcb-a9d4-627e1864ed951605063003152-1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/11/3a641255-0ad5-41b5-82c9-c39498c7e7d41605063003199-2.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/11/15436f20-75b9-4533-98d5-dd7968b089821605063003363-5.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2291932/2017/11/29/11511945614124-FabSeasons-Unisex-Blue-Self-Design-Beanie-3201511945613975-1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2291932/2017/11/29/11511945614100-FabSeasons-Unisex-Blue-Self-Design-Beanie-3201511945613975-2.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2291932/2017/11/29/11511945614100-FabSeasons-Unisex-Blue-Self-Design-Beanie-3201511945613975-2.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Vizor Cap',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/18/ec93b003-9cdd-4c86-9314-57105f885f161610963830327-1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/18/cbabefd9-dd51-4062-bc37-0c39786e2d591610963830358-3.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/18/b59145e1-46e7-418e-8153-182ade51871f1610963830375-4.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Marvel Cap',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13464714/2021/2/15/c473994b-d592-490b-96a6-9e6de4c024f41613368077994-Kook-N-Keech-Men-Black-Embroidered-Marvel-Baseball-Cap-13161-1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13464714/2021/2/15/44ca9892-aff7-4465-b686-79595d94d92d1613368077967-Kook-N-Keech-Men-Black-Embroidered-Marvel-Baseball-Cap-13161-2.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13464714/2021/2/15/6d517077-c1d1-42c0-9f8f-66eb08e7d6761613368077872-Kook-N-Keech-Men-Black-Embroidered-Marvel-Baseball-Cap-13161-5.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12424014/2020/10/30/9ca7096a-6d6b-4f84-9e9d-d98636ea487c1604058635232CapsDressBerryWomenCapsDressBerryWomenCapsDressBerryWomenCap1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12424014/2020/10/30/b6ef5b8d-42a9-4b80-9abb-8a4ceb44e67e1604058635353CapsDressBerryWomenCapsDressBerryWomenCapsDressBerryWomenCap3.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12424014/2020/10/30/2d7a2be7-3cbd-49e5-8dd3-b128726568581604058635412CapsDressBerryWomenCapsDressBerryWomenCapsDressBerryWomenCap4.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'Roadster Cap',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12561146/2020/10/10/9752b247-50c2-4965-a767-ac8250bdd50f1602314697873-Roadster-Unisex-Caps-6911602314696666-1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12561146/2020/10/10/1a198357-0915-4b95-afbe-6d49cc0f3e631602314697782-Roadster-Unisex-Caps-6911602314696666-3.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12561146/2020/10/10/8005693e-178c-4010-8c5b-03125c81e7271602314697694-Roadster-Unisex-Caps-6911602314696666-5.jpg',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/17/55515bd0-c6c5-47f8-a5ac-e1d3a8559f841608188420649-1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/17/8d63b241-6f58-4ff2-875d-1f01fdbe6d841608188420706-2.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/17/c8c4e2ff-e150-4685-98ef-a0007a8b91ed1608188420760-3.jpg',
          price: 18
        },
        {
          id: 8,
          name: 'Star Wars Cap',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/880953/2015/8/25/11440493171501-Kook-N-Keech-Disney-Men-Orange-Star-Wars-Cap-1361440493171251-1.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/880953/2015/8/25/11440493171444-Kook-N-Keech-Disney-Men-Orange-Star-Wars-Cap-1361440493171251-2.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/880953/2015/8/25/11440493171325-Kook-N-Keech-Disney-Men-Orange-Star-Wars-Cap-1361440493171251-4.jpg',
          price: 14
        },
        {
          id: 9,
          name: 'Beige Snapback',
          imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/bf57f477-3a81-4692-8843-7f11d64838db1600465657517-2.jpg',
          imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/c430642e-66e9-4a49-b6ec-b1976fd509021600465657575-3.jpg',
          imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/981ae7ec-9237-4243-8e25-8db72c4349d21600465657626-4.jpg',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl_1: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl_2: '',
          imageUrl_3: '',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl_1: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          imageUrl_2: '',
          imageUrl_3: '',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl_1: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          imageUrl_2: '',
          imageUrl_3: '',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl_1: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl_1: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl_1: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl_1: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl_1: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl_1: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl_1: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl_1: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl_1: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl_1: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl_1: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl_1: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl_1: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl_1: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl_1: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl_1: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl_1: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl_1: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl_1: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl_1: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl_1: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl_1: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl_1: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ]

  export default SHOP_DATA;