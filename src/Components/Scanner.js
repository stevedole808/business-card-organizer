import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class Scanner extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
        this.setState({
            result: data
        })
        // return(
        //     <Redirect
        //         path={`/card/${data}`}
        //         render={(props) => <BizCard {...props} userId={data}
        //         />}
        //     />
        // )
    }
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