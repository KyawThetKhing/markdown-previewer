import React from "react";
import marked from "marked";
import "./App.css";

marked.setOptions({
  breaks: true
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Welcome to my React Markdown Previewer!"
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  createMarkUp = () => {
    marked.setOptions({
      breaks: true
    });
    let rawMarkup = marked(this.state.input);

    return { __html: rawMarkup };
  };

  render() {
    return (
      <div className="markdown container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h4>Editor</h4>
            <textarea
              id="editor"
              className="textarea"
              value={this.state.input}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="col-md-6">
            <h4>Markdown</h4>
            <span
              id="preview"
              dangerouslySetInnerHTML={this.createMarkUp()}
            ></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
