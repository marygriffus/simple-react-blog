var React = require("react");
var ReactDOM = require("react-dom");

var post = {
  title: "This blog post",
  author: "T-Rex",
  body: "omg i just love smashing stuff up nom nom nom",
  comments: [
    {
      commenter: "raptor",
      body: "First"
    },
    {
      commenter: "stegasaurus",
      body: "don't eat me nooooo"
    },
    {
      commenter: "stegggioi",
      body: "whyyyyyyy"
    }
  ]
}

var Comment = React.createClass({
  render: function(){
    return(
      <div>
        <h3>{this.props.commenter} said:</h3>
        <p>{this.props.body}</p>
      </div>
    )
  }
})

var Post = React.createClass({
  getInitialState: function(){
    return {
      body: "omg i just love smashing stuff up nom nom nom nom"
    }
  },
  editPost: function(){
    bodyNew = document.getElementById("editor").value
    this.setState({
      body: bodyNew
    })
  },
  render: function(){
    var comments = this.props.comments.map(function(comment, index){
      return <Comment commenter={comment.commenter} body={comment.body} />
    })
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>By {this.props.author}</h3>
        <p>{this.state.body}</p>
        
        <input onChange={this.editPost} type="text" placeholder={this.state.body} id="editor"></input>
        <button onClick={this.editPost}>Edit</button>
//not super happy with this... I had some difficulties trying to make this a submittable form


        <h3>Comments</h3>
        {comments}
      </div>
    )
  }
})

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments} />,
  document.getElementById("app")
)
