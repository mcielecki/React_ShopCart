import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, addToLook, finishLook } from './actions/cartActions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    handleLook = (id)=>{
        this.props.finishLook(id); 
        this.props.addToLook(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.image} alt={item.product_name}/>
                            <Link to={`/product/${item.product_name}`}><span className="card-title" onClick={()=>{this.handleLook(item.id)}}>{item.product_name}</span></Link>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>
                        <div className="card-content">
                            <p><b>Cena: {item.price.substr(1)}$</b></p>
                        </div>
                 </div>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Rzeczy do kupienia:</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addToLook: (id)=>{dispatch(addToLook(id))},
        finishLook: (id)=>{dispatch(finishLook(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)