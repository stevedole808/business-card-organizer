import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import QrReader from 'react-qr-reader'
import Confirm from './Confirm'

const Scanner = (props) => {
  const [result, setResult] = useState([]);

  const handleScan = data => {
    setResult(data)
  }

  const handleError = err => {
    console.log('There was a scan error' + err)
  }

  return(
    <div className='scanner'>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Please scan QR code</p>
      <p>{result}</p>
    </div>
  )
}

export default Scanner;