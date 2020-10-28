import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-userInfo">
          <img
            className="card-userInfo-img"
            src={this.props.user.avatar_url}
            alt={this.props.user.name}
          />
          <div className="card-userInfo-words">
            <h2>{this.props.user.name}</h2>
            <h3>
              <a
                href={`https://github.com/${this.props.user.login}`}
                target="blank"
              >
                @{this.props.user.login}
              </a>
            </h3>
            <h4>{this.props.user.location}</h4>
            <p>{this.props.user.public_repos} public repos</p>
          </div>
        </div>
        <div className="calendar"></div>
      </div>
    );
  }
}

export default Card;
