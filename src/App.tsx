import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Title } from './components/Title'
import { Flex } from './components/Flex'
import { Console } from './components/Console'
import { Button } from './components/Button'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`
function App() {
  return (
    <AppWrapper>
      <Flex justify='center' align='center'>
        <Title>Console</Title>
      </Flex>
      <Flex direction='column' margin='10px 0'>
        <Console />
        <Button align='flex-end' outlined>
          Send
        </Button>
      </Flex>
    </AppWrapper>
  )
}

export default App
