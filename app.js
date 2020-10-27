import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    followers: "",
  };

  componentDidMount() {
    this.fetchFollowers("followers");
  }

  fetchFollowers = (user) => {
    axios
      .get(`https://api.github.com/users/MattBokovitz1`)
      .then((resp) => {
        this.setState({
          users: resp.data.message,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({ followers: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.fetchFollowers(this.state.followers);
    this.setState({ followers: "" });
  };

  render() {
    return (
      <div className="App">
        <h1> Search Matt's Followers</h1>
        <form onSubmit={this.handleSearch}>
          <input
            value={this.state.followers}
            onChange={this.handleChange}
            type="text"
          />
          <button>Fetch Followers</button>
        </form>
        <div className="followersContainer">
          {this.state.followers.map((item) => (
            <img width="200" key={item} src={item} alt={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
