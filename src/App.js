import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    ClassicEditor
      .create(document.querySelector('#editor'))
      .then(editor => {
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (<div className="App" >
      <header className="App-header">
        <div id='editor'></div>
      </header>
    </div>);
  }
}

export default App;
