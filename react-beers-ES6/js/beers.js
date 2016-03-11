var BeerItem = React.createClass({
	incCount: function() {
		this.props.addOne(this.props.beer);
	},
  minCount: function(){
    this.props.removeOne(this.props.beer);
  },
	render: function() {
		return <li>[{this.props.count}] {this.props.beer} <button className="green" onClick={this.incCount}>+</button> <button className="red" onClick={this.minCount}>-</button></li>;
	}
});

var BeerList = React.createClass({
	getInitialState : function() {
		return {
			beers: [
				{name: "Heineken", count: 0},
				{name: "Budweiser", count: 0},
				{name: "Pilsen", count: 0}
			]
		};
	},

	addOne : function(beerName) {
		var beers = this.state.beers,
			beer = beers.filter(function(x) {
				return x.name === beerName;
			})[0];

		beer.count ++;

		this.setState({beers: beers});
	},

  removeOne: function(beerName){
    var beers = this.state.beers,
			beer = beers.filter(function(x) {
				return x.name === beerName;
			})[0];


    if(beer.count > 0){
        beer.count --;
    }
		
		this.setState({beers: beers});
  },

	render: function() {

		var total, beerItems;

		total = this.state.beers.reduce(function(acc, x) {
			return acc + x.count;
		}, 0);

		beerItems = this.state.beers.map(function(x) {
			return <BeerItem  key={x.name} beer={x.name} count={x.count} addOne={this.addOne} removeOne={this.removeOne} />;
		}, this);

		return <div><p>Llevas {total} cervezas</p><ul>{beerItems}</ul></div>;
	}
});

ReactDOM.render(<BeerList/>, document.getElementById('container'));
