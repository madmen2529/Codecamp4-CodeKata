import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <CardList />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt="cap image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card     
          featureImage="https://picsum.photos/id/155/200"
          title="Rail road to hell"
          description="..."
          link="https://picsum.photos/"
        />
      </div>
      <div className="col-sm-4">
      <Card     
        featureImage="https://picsum.photos/id/237/200"
        title="Lucia, the black dog"
        description="..."
        link="https://picsum.photos/"
      />
      </div>
      <div className="col-sm-4">
      <Card 
        featureImage="https://picsum.photos/id/250/200"
        title="The eternal memories."
        description="..."
        link="https://picsum.photos/"
      />
      </div>
    </div>
  );
}

export default App;
