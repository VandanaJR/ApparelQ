import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice(
    {
        name:"shopData",
        initialState:[
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
                  name: 'Beige Snapback',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/bf57f477-3a81-4692-8843-7f11d64838db1600465657517-2.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/c430642e-66e9-4a49-b6ec-b1976fd509021600465657575-3.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/981ae7ec-9237-4243-8e25-8db72c4349d21600465657626-4.jpg',
                  price: 16
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
                }
              ]
            },
            {
              id: 2,
              title: 'Sneakers',
              routeName: 'sneakers',
              items: [
                {
                  id: 9,
                  name: 'Grey Sneakers',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785495/2019/6/14/906f1f81-db79-481b-9962-6306abe4a1bf1560500752934-LOCOMOTIVE-Men-Grey-Sneakers-5091560500751016-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785495/2021/2/1/b665ad67-75a1-40b8-b8e9-de2f46e919f41612186470171-LOCOMOTIVE-Men-Grey-Sneakers-3871612186469011-4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785495/2021/2/1/fc6a08bd-5fd5-469d-9f8a-482ae7c406ec1612186470123-LOCOMOTIVE-Men-Grey-Sneakers-3871612186469011-6.jpg',
                  price: 220
                },
                {
                  id: 10,
                  name: 'Puma Sneakers',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11334930/2020/9/29/8592a166-3550-4dad-b56e-f04e72d726371601383216989-Puma-Men-Navy-Blue-Trenzo-II-IDP-Sneakers-7351601383215361-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11334930/2020/9/29/c8d02514-778e-40fd-9105-b794ea3ee7351601383216808-Puma-Men-Navy-Blue-Trenzo-II-IDP-Sneakers-7351601383215361-4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11334930/2020/9/29/cfcf36c3-9134-476e-970b-aee1f922ef071601383216622-Puma-Men-Navy-Blue-Trenzo-II-IDP-Sneakers-7351601383215361-6.jpg',
                  price: 280
                },
                {
                  id: 11,
                  name: 'Nike Air Jordans',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11980188/2020/11/24/64f6c4c9-acaa-4241-828b-ae27185742911606203088221-AIR-JORDAN-5-RETRO-SE-2611606203086326-3.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11980188/2020/11/24/650a225e-51e0-4d61-92a9-1bb8663813bf1606203088168-AIR-JORDAN-5-RETRO-SE-2611606203086326-4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11980188/2020/11/24/69d5bcbf-9cf0-4290-98e4-584a40d903891606203088276-AIR-JORDAN-5-RETRO-SE-2611606203086326-2.jpg',
                  price: 300
                },
                {
                  id: 12,
                  name: 'Woodland Shoes',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11558374/2020/10/8/83829f17-72b6-4431-baef-0ebaa6fa975e1602135260634-Woodland-Men-Navy-Blue-Textured-Nubuck-Mid-Top-Flat-Boots-87-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11558374/2020/10/8/410110dc-0ce5-479b-aaa1-86a1686039171602135260594-Woodland-Men-Navy-Blue-Textured-Nubuck-Mid-Top-Flat-Boots-87-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11558374/2020/10/8/5d8096c3-31be-4f80-af28-d5eb5f54dc551602135260548-Woodland-Men-Navy-Blue-Textured-Nubuck-Mid-Top-Flat-Boots-87-3.jpg',
                  price: 160
                },
                {
                  id: 13,
                  name: 'Black & White Sneakers',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/4/f84e694f-8361-442b-b7e4-cb7d06dac3d81612429360319-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/4/e958570b-9ac8-44a0-b657-c8c396a3e5851612429360356-3.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/4/fe261886-f0f5-41b5-916d-45928a22348d1612429360398-5.jpg',
                  price: 160
                },
                {
                  id: 14,
                  name: 'Olive Green Leather Derbys',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1498430/2016/9/24/11474701226212-Woodland-Men-Casual-Shoes-681474701225924-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1498430/2016/9/24/11474701226164-Woodland-Men-Casual-Shoes-681474701225924-3.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1498430/2016/9/24/11474701226137-Woodland-Men-Casual-Shoes-681474701225924-4.jpg',
                  price: 160
                },
                {
                  id: 15,
                  name: 'Red Sneakers',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12868304/2021/2/10/bbbccdb6-b090-4b94-99aa-f9783882ff461612951870724-WROGN-Men-Casual-Shoes-171612951869294-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12868304/2021/2/10/9b5f732d-d2b7-4cdf-b1b0-f1acee7a7f631612951870709-WROGN-Men-Casual-Shoes-171612951869294-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12868304/2021/2/10/2c33c766-5a15-4214-9821-76e3470d67091612951870693-WROGN-Men-Casual-Shoes-171612951869294-3.jpg',
                  price: 190
                },
                {
                  id: 16,
                  name: 'Grey Pro Sneakers',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2154017/2019/10/23/899affcf-d29d-412c-ae29-fad662b672031571810280862-HRX-by-Hrithik-Roshan-Men-Grey-Pro-Sneakers-3041571810278751-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2154017/2019/10/23/c4c5cb82-0429-4999-95c1-33e37e07f5c81571810280665-HRX-by-Hrithik-Roshan-Men-Grey-Pro-Sneakers-3041571810278751-4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2154017/2019/10/23/9860ad5e-ba9f-461b-945e-2c3c5c3d04e91571810280565-HRX-by-Hrithik-Roshan-Men-Grey-Pro-Sneakers-3041571810278751-6.jpg',
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
                  id: 17,
                  name: 'Khaki Solid Denim Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/9/d47e84e7-a3bf-4dfb-a50d-ed828bf942ca1610197839467-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/9/ae80ca86-3171-4c97-94bb-a3dcbca23ed61610197839517-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/9/c639421c-cf69-4960-ad92-7a0990b2a2a31610197839643-5.jpg',
                  price: 125
                },
                {
                  id: 18,
                  name: 'Grey Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/10/110ad72e-8f9f-4a42-ad30-e8df7aabca221612961466417-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/10/8095a627-e4e2-4138-bdff-382f556f0e921612961466437-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/10/53d73661-e39b-49ad-b855-c232dc477ad41612961466479-4.jpg',
                  price: 90
                },
                {
                  id: 19,
                  name: 'Beige Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10187007/2021/2/11/27dffafb-abf3-45aa-9383-87a96a06b00b1613034894905-WROGN-Men-Cream-Coloured-Solid-Jacket-9661613034893105-3.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10187007/2021/2/11/249d3b1f-dcd4-43c4-8468-b7bdcfde1cdb1613034894923-WROGN-Men-Cream-Coloured-Solid-Jacket-9661613034893105-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10187007/2021/2/11/55df4f71-9f0c-4a55-b187-6b477a6e643b1613034894868-WROGN-Men-Cream-Coloured-Solid-Jacket-9661613034893105-5.jpg',
                  price: 90
                },
                {
                  id: 20,
                  name: 'Beige Solid Oversized Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/20/3d0fd82f-55fb-43ed-900f-407a3cf8511a1613800284196-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/20/977cd1c3-7aaf-4fd8-9230-74efbcc509d21613800284217-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/20/0aeca825-9b6c-46f7-933b-fc5ec3cb79531613800284260-4.jpg',
                  price: 165
                },
                {
                  id: 21,
                  name: 'Jean Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/10/21/9a024e5d-f764-41b9-87fb-f09c49227d8d1571632368620-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/10/21/6023761b-0789-499a-8a06-023e789d6a381571632368698-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/10/21/7571de4c-11e2-4fa2-b6c2-1b518511f97a1571632368804-4.jpg',
                  price: 185
                },
                {
                  id: 22,
                  name: 'Blue Crop Denim Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/8/c0d72f6a-71d8-4dcd-abda-dbe71240b8941607425133646-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/8/63d6b854-15be-4b34-895f-4874ccf59d111607425133719-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/8/ec3c2e87-71a8-4981-96aa-db5c72d60bc51607425133921-5.jpg',
                  price: 185
                },{
                  id: 23,
                  name: 'Black Quilted Shirt Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/2149e59e-7825-4ebc-866b-5b618886b8181612885102633-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/747cd5c8-599e-4038-8310-9e2a0ff6d4881612885102651-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/f994c2b7-0a9c-496f-89c1-c30c90c7b41f1612885102689-4.jpg',
                  price: 185
                },{
                  id: 24,
                  name: 'White Jacket',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13188754/2020/12/9/24bd210b-dc8b-4d5f-af0e-19bdfb70e2011607522219580-HIGHLANDER-Men-White-Solid-Tailored-Jacket-9151607522217648-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13188754/2020/12/9/3e1a3dc5-3d84-4874-bab4-baf5055836e41607522219521-HIGHLANDER-Men-White-Solid-Tailored-Jacket-9151607522217648-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13188754/2020/12/9/67401517-d970-479d-a450-e84ca54669891607522219346-HIGHLANDER-Men-White-Solid-Tailored-Jacket-9151607522217648-5.jpg',
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
                  id: 25,
                  name: 'Navy Blue Printed Shirt Dress',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/6/10/027bc8c5-c343-49d4-bdc6-bb9687ef03ab1560139075957-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/6/10/b2617e3b-4e80-45aa-8730-9b3d64bb25131560139075980-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/6/10/73f93527-58b4-4c84-9a7c-1d0932e7871f1560139076007-3.jpg',
                  price: 25
                },
                {
                  id: 26,
                  name: 'Floral Dress',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12666318/2020/10/16/79d0bdc5-0f43-40ea-a4c4-41d1bfede6501602831467377-DOROTHY-PERKINS-Women-Dresses-8581602831465465-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12666318/2020/10/16/a9940b16-dab2-4060-9081-78042069996a1602831467326-DOROTHY-PERKINS-Women-Dresses-8581602831465465-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12666318/2020/10/16/8f4c640e-183c-4655-aa62-1b66227f658d1602831467223-DOROTHY-PERKINS-Women-Dresses-8581602831465465-4.jpg',
                  price: 20
                },
                {
                  id: 27,
                  name: 'Green Solid Blouson Dress',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/23/1270bfb8-513d-4f1f-8a55-bef8186313111616489917283-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/23/6712cba3-1bfc-4067-9ed9-6591ac324f2b1616489917347-4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/23/7d51897d-c8db-4a90-abae-84eedeaff2331616489917366-5.jpg',
                  price: 80
                },
                {
                  id: 28,
                  name: 'Brown Solid Basic Jumpsuit',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/3/ca529516-b42f-47a6-892f-0fb35e30cce31593731678314-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/3/fd02d861-f45c-4efc-b7c0-f4ca8043a5f41593731678494-4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/3/f95284cd-8afa-4630-8087-ab32e491176a1593731678613-6.jpg',
                  price: 80
                },
                {
                  id: 29,
                  name: 'Pink Jumpsuit',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/23/9028604c-d3ce-403e-a2ec-7fcca4e8f2c71614060987079-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/23/160918b3-54fd-4cd0-9aa7-f3af8f7a4ec91614060987099-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/23/78c62e42-0e99-4323-a53f-6c15e68ef76a1614060987161-5.jpg',
                  price: 45
                },
                {
                  id: 30,
                  name: 'Printed Culotte Jumpsuit',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/13/24885035-caee-4980-87c5-33906b72c7781605209085588-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/13/2c2726b9-65ed-4b96-87bd-1c80aebf5a1f1605209085636-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/13/5c484c2a-674d-47dc-9a3d-1597c487cfd11605209085765-5.jpg',
                  price: 135
                },
                {
                  id: 31,
                  name: 'Floral Blouse',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/27/c08fd5fb-cf4a-4d12-9a1c-e63df25cfca21614414505614-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/27/22a5eeae-4d4b-4498-bf31-3bcab75843671614414505631-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/27/5e747c9e-d102-43ee-b14f-abb739a188631614414505695-5.jpg',
                  price: 20
                }
                ,
                {
                  id: 32,
                  name: 'White Blouse',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11364152/2020/1/27/091a681c-beb4-4192-bc64-44ca554391141580121893720-SASSAFRAS-Women-White-Solid-Blouson-Top-731580121889856-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11364152/2020/1/27/b63eb38e-5576-408a-a203-c9e7d5cf4e321580121893551-SASSAFRAS-Women-White-Solid-Blouson-Top-731580121889856-4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11364152/2020/1/27/19d87417-a8d1-476e-aabf-0da0fce824141580121893465-SASSAFRAS-Women-White-Solid-Blouson-Top-731580121889856-5.jpg',
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
                  id: 33,
                  name: 'Dennis Lingo',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7488108/2018/9/26/fe316409-76eb-486c-bb3c-b572344a5c251537944982515-Dennis-Lingo-Men-Dusty-Pink-Slim-Fit-Solid-Casual-Shirt-8561537944982305-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7488108/2018/9/26/d09d5a07-2031-4b83-8002-471067798ff31537944982481-Dennis-Lingo-Men-Dusty-Pink-Slim-Fit-Solid-Casual-Shirt-8561537944982305-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7488108/2018/9/26/abd4e855-d241-49b1-bbe9-d46c66b694aa1537944982421-Dennis-Lingo-Men-Dusty-Pink-Slim-Fit-Solid-Casual-Shirt-8561537944982305-4.jpg',
                  price: 325
                },
                {
                  id: 34,
                  name: 'Floral Shirt',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11369790/2020/3/5/5eb68569-d5c4-4322-b8c4-4cfdfeae72ae1583402722026-Mast--Harbour-Men-Blue--White-Regular-Fit-Printed-Cotton-Lin-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11369790/2020/3/5/40300b38-aa0f-43a6-b958-60a7b808a17b1583402721983-Mast--Harbour-Men-Blue--White-Regular-Fit-Printed-Cotton-Lin-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11369790/2020/3/5/221a5913-86ec-4a22-a00e-f39a447dd3e81583402721942-Mast--Harbour-Men-Blue--White-Regular-Fit-Printed-Cotton-Lin-3.jpg',
                  price: 20
                },
                {
                  id: 35,
                  name: 'Blue & White Longsleeve',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780938/2020/4/3/34c18c12-5d8c-4b85-8764-5e4c3740f0511585904912098HIGHLANDERMenWhiteNavyBlueSlimFitStripedCasualShirt1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780938/2020/4/3/8ae6846d-386a-44b1-a328-185ff0348bb41585904912315HIGHLANDERMenWhiteNavyBlueSlimFitStripedCasualShirt4.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780938/2020/4/3/2d008949-ba72-4f4a-9c06-40379aa364951585904912376HIGHLANDERMenWhiteNavyBlueSlimFitStripedCasualShirt5.jpg',
                  price: 25
                },
                {
                  id: 36,
                  name: 'Pink T-shirt',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2388085/2018/4/12/11523512033864-Kook-N-Keech-Men-Tshirts-5111523512033772-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2388085/2018/4/12/11523512033937-Kook-N-Keech-Men-Tshirts-5111523512033772-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2388085/2018/4/12/11523512033893-Kook-N-Keech-Men-Tshirts-5111523512033772-4.jpg',
                  price: 25
                },
                {
                  id: 37,
                  name: 'Jean Long Sleeve',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7226843/2019/1/30/1092b2e7-2a9a-445d-abd4-d4327e4aaa321548831163560-GAP-Men-Slim-Fit-Western-Denim-Shirt--3891548831161670-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7226843/2019/1/30/e0852b8b-cafb-47a8-bdfe-e5e4beca0d7f1548831163482-GAP-Men-Slim-Fit-Western-Denim-Shirt--3891548831161670-2.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7226843/2019/1/30/59467d6b-283c-4646-8cf4-a755db8be41c1548831163264-GAP-Men-Slim-Fit-Western-Denim-Shirt--3891548831161670-4.jpg',
                  price: 40
                },
                {
                  id: 38,
                  name: 'Olive Green Solid Track Pants',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/24/b3df0938-2790-4cfa-82a7-9358a112c3181614172574845-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/24/c861478f-f0e4-4801-8d93-b2dbab8e54601614172574923-5.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/24/c451e077-2c35-4f7a-b9cc-81f510237ab61614172574907-4.jpg',
                  price: 25
                },
                {
                  id: 39,
                  name: 'Blue Tapered Fit Jeans',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/12/8a4d02ed-e734-49d0-9bec-6e084c767ce71615550645108-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/12/8a4d02ed-e734-49d0-9bec-6e084c767ce71615550645108-1.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/12/88b62e8d-c2c2-47a4-83f9-7299d1f9b9501615550645216-5.jpg',
                  price: 25
                },
                {
                  id: 40,
                  name: 'Louis Philippe Grey Pants',
                  imageUrl_1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12246822/2020/11/2/c0d2791c-8c00-4ce5-9f7d-668f601778261604315056541-Louis-Philippe-Men-Trousers-5731604315055079-1.jpg',
                  imageUrl_2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12246822/2020/11/2/73fe2834-ba61-4400-9902-8046f546693d1604315056465-Louis-Philippe-Men-Trousers-5731604315055079-3.jpg',
                  imageUrl_3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12246822/2020/11/2/5bbaa33d-adaa-409f-9aaf-ca26cdc664e71604315056425-Louis-Philippe-Men-Trousers-5731604315055079-4.jpg',
                  price: 25
                },
              ]
            }
          ],
        reducers:{}
    }
)

//console.log(slice)
export default slice.reducer