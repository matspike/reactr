import React, { Component } from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Text from './text.md';

const markdown = `Just a link: https://reactjs.com.`

ReactDom.render(
  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
  document.body
)

// class App extends Component {

//     constructor() {
//       super();
//       this.state = { markdown: '' };
//     }
  
//     componentWillMount() {
//       // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
//       fetch(Text).then(res => res.text()).then(text => this.setState({ markdown: text }));
//     }
  
//     render() {
//       const { markdown } = this.state;
//       return <ReactMarkdown source={markdown} />;
//     }
//   }
  
// export default App;