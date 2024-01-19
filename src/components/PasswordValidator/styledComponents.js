import styled from 'styled-components'

export const App = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Inner = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  background-color: #434451;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-text: center;
  padding: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: #f8fafc;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  outline: none;
  border-width: 0;
`
export const Warning = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: #ef4444;
`
