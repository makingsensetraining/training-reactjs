// Child
var BookForm = React.createClass({
    propTypes: {
      onBook: React.PropTypes.func.isRequired
    },
    getInitialState() {
      return {
        title: '',
        read: false
      };
    },
    changeTitle(ev) {
      this.setState({
        title: ev.target.value
      });
    },
    changeRead() {
      this.setState({
        read: !this.state.read
      });
    },
    addBook(ev) {
      ev.preventDefault();

      this.props.onBook({
        title: this.state.title,
        read: this.state.read
      });

      this.setState({
        title: '',
        read: false
      });
    },
    render() {
      return (
        <form onSubmit={this.addBook}>
          <div>
            <div><input type='text' id='title' value={this.state.title} onChange={this.changeTitle} placeholder='Title' /></div>
          </div>
          <div>
          <div><label htmlFor='title'>Read</label><input type='checkbox' id='read' checked={this.state.read} onChange={this.changeRead} /></div>
          </div>
          <div>
            <button type='submit'>Add Book</button>
          </div>
        </form>
      );
    }
});

// Child
var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
      read: React.PropTypes.bool.isRequired
    },
    getInitialState() {
      return {
        title: this.props.title,
        read: this.props.read
      };
    },
    handleChange(ev) {
      this.setState({
        read: !this.state.read
      });
    },
    render() {
      return (
        <tr>
          <td>{this.props.title}</td>
          <td><input type='checkbox' checked={this.state.read} onChange={this.handleChange} /></td>
        </tr>
      );
    }
});

// Parent
var Books = React.createClass({
    propTypes: {
      books: React.PropTypes.array
    },
    getInitialState() {
      return {
        books: (this.props.books || [])
      };
    },
    onBook(book) {
      this.state.books.push(book);

      this.setState({
        books: this.state.books
      });
    },
    render() {      
      var books = this.state.books.map(function(book) {
        return <Book key={book.title} title={book.title} read={book.read}></Book>;
      });

      return (
        <div>
          <BookForm onBook={this.onBook}></BookForm>
          <table className={"book-table"}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Read</th>
              </tr>
            </thead>
            <tbody>{books}</tbody>
          </table>
        </div>
      );
    }
});

ReactDOM.render(<Books />, document.getElementById('container'));
