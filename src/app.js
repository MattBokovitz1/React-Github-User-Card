import React from "react";
import axios from "axios";
import "./app.css";
import Card from "../components/Card";
import "./style.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      username: "",
      commits: [],
    };
  }

  componentDidMount() {
    console.log("component mounted");
    this.fetchPeople("MattBokovitz1");
  }

  fetchPeople = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((resp) => {
        this.setState({
          people: [...this.state.people, resp.data],
        });
        console.log("people", this.state.people);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleAddUser = (e) => {
    e.preventDefault();
    this.fetchPeople(this.state.username);
    this.setState({ username: "" });
  };

  render() {
    return (
      <div className="App">
        <h1> GitHub Cards!!</h1>
        <form onSubmit={this.handleAddUser}>
          <input
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
          />
          <button>Add User</button>
        </form>
        <div className="cards">
          {this.state.people.map((user) => {
            return <Card key={user.id} user={user} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
