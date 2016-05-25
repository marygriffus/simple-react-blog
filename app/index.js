var React = require("react");
var ReactDOM = require("react-dom");

var post = {
  title: "This blog post",
  author: "T-Rex",
  body: "omg i just love smashing stuff up nom nom nom",
  comments: [
    "First",
    "Don't eat me",
    "whyyyyy"
  ]
}

var Post = React.createClass({
  render: function(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>By {this.props.author}</h3>
        <p>{this.props.body}</p>

        <h3>Comments</h3>
        <p>{this.props.comment}</p>
      </div>
    )
  }
})

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comment={post.comments[0]} />,
  document.getElementById("app")
)
