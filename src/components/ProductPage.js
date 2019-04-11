import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, finishLook } from './actions/cartActions'
class Cart extends Component{
  handleClick = (id)=>{
    this.props.addToCart(id); 
}

  removeItems = (id) => {
    this.props.finishLook(id); 
  }

    render(){

        let chooseItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{

                    return(
                        <>
                        <li className="collection-item" key={item.id}>
                            <div class="flex-order">
                                    <div className="item-img"> 
                                        <img src={item.image} alt={item.image} className=""/>
                                    </div>
                                    <div className="item-desc">
                                        <span className="title">{item.product_name}</span>
                                        <p>{item.description}</p>
                                    </div>
                                    </div>
                                    <div className="price-div">
                                        <p className="item-price"><b>Cena: {item.price.substr(1)}$</b></p> 
                                        <button className="waves-effect waves-light btn blue" onClick={()=>{this.handleClick(item.id)}}>Kup</button>
                                    </div>
                                </li>
                                <div className="back-link">
                                    <Link to="/"><button className="waves-effect waves-light btn blue">Wróć</button></Link>
                                   </div>
                                   </>
                    )
                })
            ):

             (
                <p>Wystąpił błąd</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Szczegóły produktu:</h5>
                    <ul className="collection">
                        {chooseItems}
                    </ul>
                   
                </div>       
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.chooseItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
      addToCart: (id)=>{dispatch(addToCart(id))},
      finishLook: (id)=>{dispatch(finishLook(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)