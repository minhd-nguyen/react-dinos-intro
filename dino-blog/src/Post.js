import React, {Component} from 'react';

let post = {
    header: "Some Dino based Blog Post",
    author: "SEI 29 Class",
    content: "Some freaking brontosaurus",
    comment: "This is how I really feel about dinos 🦖"
}

class Comment extends Component {
    render () {
        return (
            <div>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}

class Content extends Component {
    render () {
        return (
            <p>{this.props.content}</p>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <h1>{this.props.header}</h1>
        )
    }
}

class Author extends Component {
    render () {
        return (
            <h3>{this.props.author}</h3>
        )
    }
}

class Post extends Component {
    render () {
        return (
            <div>
                <Header header={post.header} />
                <Author author={post.author} />
                <Content content={post.content} />
                <Comment comment={post.comment} />
            </div>
        )
    }
}


function App() {
  return (
    <Post />
  )
}
export default App;