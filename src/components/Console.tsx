import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from './Flex'
import { Line } from './Line'

interface ConsoleProps {
  color?: string
}

const StyledConsole = styled('textarea')<ConsoleProps>`
  width: 100%;
  height: 70vh;
  font-size: 24px;
  border: none;
  background-color: black;
  color: ${props => props.color || props.theme.colors.primary};
  outline: none;
  resize: none;
  @media ${props => props.theme.media.phone} {
    border: 1px solid red;
  }
  @media ${props => props.theme.media.tablet} {
    border: 1px solid green;
  }
`

export const Console = ({ color, ...props }: ConsoleProps) => {
  const [lines, setLines] = useState(['C:/users>'])

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.charCode == 13) {
      setLines([...lines, 'C:/users>'])
    }
  }

  return (
    <Flex>
      <Flex direction='column' margin='0 10px'>
        {lines.map(line => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole
        color={color}
        {...props}
        onKeyPress={onKeyPress}
      ></StyledConsole>
    </Flex>
  )
}
