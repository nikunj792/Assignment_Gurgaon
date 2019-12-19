import React from 'react';
import '../styles/creditCardInput.css';
import axios from 'axios';
import matches from 'validator/es/lib/matches';
import constants from '../util/constants';
import UserInput from '../molecules/UserInput/userInput';
import CreditCardUsers from './creditCardUsers';
import Button from '../atoms/Button/Button';

export default class CreditCardInput extends React.PureComponent {

  state = {
    userName: '',
    userCCNumber: '',
    userCCLimit: '',
    allUserDetails: [],
    content: [],
    numberErrorFlag: false,
    limitErrorFlag: false,
    userCCNumberError: '',
    userCCLimitError: '',
    userCCNumberLengthError: '',
    response:'',
    }

  userCCData() {
    axios.get(`http://localhost:3010/getAll`)
      .then(res => {
        this.setState(
          {
            content: res.data
          }
        )
      });
  }
  componentDidMount() {
    this.userCCData();
  }

  handleInputChange = e => {
    const fieldName = e.target.name;
    let numberErrorFlag = false;
    let limitErrorFlag = false;
    if (fieldName === 'userCCNumber') {
      let userCCNumberError = !matches(e.target.value, /^[0-9 ]+$/i) ? constants.userCCNumberError : '';
      let userCCNumberLengthError =  e.target.value.length !==10 ? constants.userCCNumberLengthError : '';
      let val = e.target.value.length > 10 ? e.target.value.substring(0,9) : e.target.value;
      numberErrorFlag = true;
      this.setState(
        {
          numberErrorFlag,
          userCCNumberError,
          userCCNumber: val,
          userCCNumberLengthError
        }
      )
    }
    else if (fieldName === 'userCCLimit') {
      let userCCLimitError = !matches(e.target.value, '^[0-9][0-9]*$') ? constants.userCCLimitError: '';
       limitErrorFlag = true;
      this.setState({
        limitErrorFlag,
        userCCLimitError,
        userCCLimit: e.target.value,
      })
    }
    else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleDetailSubmit = () => {
    const { userName, userCCNumber, userCCLimit } = this.state;
    const userCCData = {
      userName,
      userCCNumber,
      userCCLimit: `£${userCCLimit}`
    }
    axios.post(`http://localhost:3010/add`, {
      'Content-Type': 'application/json',
      userCCData
    })
      .then((res) => {
        this.setState({
          userName: '',
          userCCNumber: '',
          userCCLimit: '',
          response: res.data.responseData
        })
      })
      .catch((err)=>{
        this.setState({
          userCCNumberError: err.response && err.response.data.creditCardError,
          numberErrorFlag: true,
        })
      })

  }
  render() {
    const { numberErrorFlag, limitErrorFlag, userCCNumberError, userCCLimitError, userCCNumberLengthError } = this.state;
    return (
      <React.Fragment>
        <div className="main">
          <div className="user-main-heading">{constants.mainHeading}</div>
        <div className="user-heading">{constants.subHeading}</div>
        <div className="container">
            <UserInput
              labelText="Name"
              inputId="userName"
              inputName="userName"
              dataLocator="user name"
              ariaLabel="user name"
              inputValue={this.state.userName}
              handleInputChange={(e) => this.handleInputChange(e)}
            />
            <UserInput
              labelText="Card number"
              inputId="userCCNumber"
              inputName="userCCNumber"
              dataLocator="user cc number"
              ariaLabel="user cc number"
              inputValue={this.state.userCCNumber}
              handleInputChange={(e) => this.handleInputChange(e)}
            />
            <span className="error-message">{numberErrorFlag ? userCCNumberError : ''}</span>
            <span className="error-message">{numberErrorFlag ? userCCNumberLengthError : ''}</span>
            <UserInput
              labelText="Limit"
              inputId="userCCLimit"
              inputName="userCCLimit"
              dataLocator="user cc limit"
              ariaLabel="user cc limit"
              inputValue={this.state.userCCLimit}
              handleInputChange={(e) => this.handleInputChange(e)}
            />
            <span className="error-message">{limitErrorFlag ? userCCLimitError : ''}</span>
          <div className="btn-submit">
            <Button dataLocator="submit btn" ariaLabel="submit btn" handleBtnClick={() => this.handleDetailSubmit()}>{constants.button_text}</Button>
          </div>
          <span>{this.state.response}</span>
        </div>
        <div className="existing-users">
          <CreditCardUsers content={this.state.content} />
        </div>
        </div>
      </React.Fragment>
    )
  }
}
