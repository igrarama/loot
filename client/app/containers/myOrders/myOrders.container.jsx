import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchOrders } from '../../../redux/actions/orderActions';

import './myOrders.scss';

class Orders extends Component {

  componentDidMount() {
    let { user } = this.props;
    this.props.dispatch(fetchOrders(user._id));
  }

  render() {
    let { orders } = this.props;

    if(orders.length == 0)
      return null; // Display Nothing in no orders

    return (
      <div>
        <h4 style={ { margin: 0 } }>הזמנות פעילות</h4>
        <table className="orders">
          {
            orders.map((order, i) => (
              <tr key={order._id} className="order">
                <td className={ 'order-products ' + (i % 2 === 0 ? 'teal' : 'blue') }>
                  { order.products.map(product => product.name).join(' - ') }
                </td>
                <td>
                 { order.status.name } 
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    )
  }

}

Orders.propTypes = {
  user: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    user: state.user.get('current'),
    orders: state.orders.toArray()
  };
}
    
export default connect(mapStateToProps)(Orders);