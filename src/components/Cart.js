import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){

        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{

                    return(
                        <li className="collection-item" key={item.id}>
                            <div class="flex-order">
                                    <div className="item-img"> 
                                        <img src={item.image} alt={item.image} className=""/>
                                    </div>
                                    <div className="item-desc">
                                        <span className="title">{item.product_name}</span>
                                        <p><b>Cena: {item.price.substr(1)}$</b></p> 
                                        <p><b>Ilość: {item.quantity}</b></p> 
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn red remove" onClick={()=>{this.handleRemove(item.id)}}>Usuń</button>
                                    </div>
                                    </div>
                                </li>
                    )
                })
            ):
             (
                <p>Twój koszyk jest pusty.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Twój koszyk:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                {this.props.items.length ? <Recipe /> : null}
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)