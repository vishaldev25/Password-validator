import {useState} from 'react'

import {App, Heading, Inner, Para, Input, Warning} from './styledComponents'

const PasswordValidator = () => {
  let isTrue = true
  const [inputText, setSecurePassword] = useState('')
  const onChaneInput = event => {
    setSecurePassword(event.target.value)
  }
  if (inputText.length >= 8) {
    isTrue = false
  }
  return (
    <App>
      <Inner>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={inputText} onChange={onChaneInput} />
        {isTrue && (
          <Warning>Your password must be at least 8 characters</Warning>
        )}
      </Inner>
    </App>
  )
}
export default PasswordValidator
