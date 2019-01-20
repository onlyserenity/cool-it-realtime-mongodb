import React, { Component } from "react";
import styled from "styled-components";
import { Button, Icon, Input, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { signup } from "../../actions";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  & div {
    width: 400px;
  }

  & button {
    margin-top: 20px !important;
  }
`;
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      username: "",
      password: "",
      errors: [],
      loading: false
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const User = {
      username: this.state.username,
      password: this.state.password
    };

    await this.props.login(User, this.props.history);
    this.setState({
      loading: false
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <Main>
        <div>
          <Label pointing="below" size="medium">
            Username
          </Label>
          <Input
            icon="user"
            iconPosition="left"
            placeholder="Enter username here"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
        </div>
        <div>
          <Label pointing="below" size="medium">
            Password
          </Label>
          <Input
            icon="lock"
            iconPosition="left"
            placeholder="Enter password here"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
          />
        </div>
        <Button
          icon
          labelPosition="right"
          color="black"
          onClick={this.onSubmit}
          disabled={this.state.loading}
          className={this.state.loading ? "loading" : ""}
        >
          Login
          <Icon name="right arrow" />
        </Button>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
