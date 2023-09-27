import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isUserExist: false,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitFormdata = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userObj = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userObj),
    }
    const request = await fetch('https://apis.ccbp.in/login', options)
    const response = await request.json()
    console.log(response)
    const {errorMsg, jwtToken} = {
      errorMsg: response.error_msg,
      jwtToken: response.jwt_token,
    }
    console.log(jwtToken)

    if (request.status === 200) {
      this.onSubmitSuccess()
    } else {
      document.getElementById('errorMsg').textContent = errorMsg
    }
  }

  render() {
    console.log(this.state)
    const {username, password} = this.state

    return (
      <div className="login-container">
        <img
          className="login-bn-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="form-container">
          <form className="form" onSubmit={this.submitFormdata}>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div className="inputs-container">
              <label htmlFor="username">USERNAME</label> <br />
              <input
                className="input"
                id="username"
                value={username}
                type="text"
                placeholder="Username"
                onChange={event =>
                  this.setState({username: event.target.value})
                }
              />
              <br />
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                className="input"
                id="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={event =>
                  this.setState({password: event.target.value})
                }
              />
              <br />
              <button className="button" type="submit">
                Login
              </button>
              <p id="errorMsg" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
