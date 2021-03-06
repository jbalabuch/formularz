import React, { Component } from 'react';

class App extends Component {
  state = {
    email: '',
    password: '',
    isSubmitted: false,
  };

  handleLogin = (event) => {
    this.setState({ isSubmitted: true });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogout = () => {
    this.setState({ password: '', email: '', isSubmitted: false });
  };

  render() {
    return (
      <>
        {this.state.isSubmitted === false && (
          <section>
            <div>
              <label>E-mail:</label>
              <input
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
            </div>
            {this.state.email === '' && (
            <div className="error">
              <label>Nie podałeś adresu e-mail</label>
            </div>
            )}

            <div>
              <label>Password:</label>
              <input
                onChange={this.handleChangePassword}
                type="password"
                value={this.state.password}
              />
            </div>
            {this.state.password === '' && (
            <div className="error">
              <label>Nie podałeś hasła</label>
            </div>
            )}

            {this.state.email === '' || this.state.password === ''  ? <button>Zaloguj</button> : <button onClick={this.handleLogin}>Zaloguj</button>} 
          </section>
        )}

        {this.state.isSubmitted === true && (
          <section>
            <div>
              <label>E-mail:</label> {this.state.email}
            </div>

            <div>
              <label>Password:</label> {this.state.password}
            </div>
            <button onClick={this.handleLogout}>Logout</button>
          </section>
        )}
      </>
    );
  }
}

export default App;
