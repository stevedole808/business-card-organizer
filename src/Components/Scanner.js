import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import QrReader from 'react-qr-reader'
import axios from 'axios'
import Confirm from './Confirm'
 
class Scanner extends Component {
  state = {
    result: 'Please scan QR code'
  }

  handleScan = data => {
    if (data) {
      this.setState({
          result: data
      });
    }
    this.render(
      <Confirm id={data} />
    )
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div className='scanner'>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Scanner;