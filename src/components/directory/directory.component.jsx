import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import {useSelector} from 'react-redux'

const  Directory= () =>{
    const directoryData = useSelector(state => state.rootReducer.directoryData)
    return(
            <div className="directory-menu">
                {directoryData.sections.map(({id,...OtherProps})=>{
                    //console.log(id)
                    return(
                        <MenuItem key={id} id={id}  {...OtherProps} />
                    )
                })}
        
            </div>
        )
    
}
export default Directory;