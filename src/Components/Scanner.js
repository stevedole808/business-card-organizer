import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import QrReader from 'react-qr-reader'
import Confirm from './Confirm'
import { Button } from '@material-ui/core'

const Scanner = (props) => {
  const [result, setResult] = useState(null);

  const handleScan = data => {
    setResult(data);
  }

  const handleError = err => {
    console.log('There was a scan error' + err);
  }

  // const waitForScan = result => {
  //   !result ? null : <Redirect to='/confirm' />
  // }

  return(
    <div className='scanner'>
      {result ? <Redirect to={{pathname:'/confirm', state:{id: result}}} /> : null}
      <QrReader
        delay={500}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Please scan QR code</p>
      <p>{result}</p>
      {/* {waitForScan(result)} */}
      <Link to='/newcard'>
        <Button>Fill out a form instead</Button>
      </Link>
    </div>
  )
}

export default Scanner;