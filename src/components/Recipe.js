import React, { Component } from 'react'
import { connect } from 'react-redux'
import { finishIt } from './actions/cartActions'
import { Link } from 'react-router-dom'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }
    finishShop = (e)=>{
            this.props.finishIt();
        }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }


    render(){
  
        return(
          <>
        <div className="collection">
            <li className="collection-item">
                <label>
                <input type="checkbox" name="ship" ref="shipping" onChange={this.handleChecked}/>
                <span>Przesyłka priorytetowa (+6$)</span></label>
            </li>
            <li className="collection-item"><b>Łączna cena: {this.props.total.toFixed(2)} $</b></li>
            </div>
            <div className="checkout">
            <Link to="/"><button onClick={()=>{this.finishShop()}}className="waves-effect waves-light btn blue">Zamów</button></Link>
        </div>
        </> 
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        finishIt: ()=>{dispatch({type: 'FINISH_IT'})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
