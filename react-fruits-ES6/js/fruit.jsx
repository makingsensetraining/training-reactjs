import React from 'react';

export default class Fruit extends React.Component{
  render() {
    return <article className="row large-4">
              <figure className="text-center">
                  <p>
                      <img src={this.state.image}/>
                  </p>
                  <figcaption>
                      <h2>{this.state.title}</h2>
                  </figcaption>
              </figure>
              <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

              <p className="large-4 column">
                  <button onClick={this.increaseQty.bind(this)} className="button success">+</button>
                  <button onClick={this.decreaseQty.bind(this)} className="button alert">-</button>
              </p>

              <p className="large-4 column"><strong>Price per item:</strong> ${this.state.price}</p>

              <h3 className="large-12 column text-center">
                  Total: ${this.state.total}
              </h3>
          </article>;
  }
  constructor(props){
    super(props);
    this.state = {
      image: props.image,
      title: props.title,
      qty: props.initialQty,
      price: props.price,
      total: 0
    }
  }
  componentWillMount(){
      this.recalculateTotal();
  }
  increaseQty(){
    this.setState({qty: this.state.qty + 1}, this.recalculateTotal);
  }
  decreaseQty(){
    let newQty = this.state.qty > 0 ? this.state.qty - 1 : 0;
    this.setState({qty: newQty}, this.recalculateTotal);
  }
  recalculateTotal() {
    this.setState({total: this.state.qty * this.props.price});
  }
};

Fruit.propTypes = {
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    initialQty: React.PropTypes.number
};

Fruit.defaultProps = {
    title: 'Undefined Product',
    price: 100,
    initialQty: 0
};