import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super()
        this.state={
            sections :[
                {
                  title: 'womens',
                  imageUrl: 'https://image.freepik.com/free-photo/full-length-shot-glad-curly-woman-striped-pants-jumping-purple-wall-indoor-portrait-wonderful-girl-sunglasses-fooling-around_197531-5125.jpg',
                  id: 1,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://image.freepik.com/free-photo/fashion-clothing-hangers-show_1153-5332.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'hats',
                  
                  imageUrl: 'https://images.unsplash.com/photo-1552060155-4eac706a5515?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://image.freepik.com/free-photo/stylish-black-american-guy-red-retro-glasses-orange-background-with-copy-space_88135-21916.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    // componentDidMount(){
    //   fetch('https://fakestoreapi.com/products/categories')
    //   .then(response=> response.json())
    //   .then(category=> this.setState({categories:category}));
    // }
    
    render(){
      //console.log(this.state.categories)
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id,...OtherProps})=>{
                    //console.log(id)
                    return(
                        <MenuItem key={id} id={id}  {...OtherProps} />
                    )
                })}
        
            </div>
        )
    }
}
export default Directory;