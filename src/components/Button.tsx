import styled, { css, keyframes } from 'styled-components'

interface ButtonProps {
  align?: string
  color?: string
  background?: string
  primary?: boolean
  outlined?: boolean
  children: React.ReactNode
}

const rotate = keyframes`
0% {
  transform: rotateZ(0deg);
}
100% {
  transform: rotateZ(360deg);
}
`

const StyledButton = styled('button')<ButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  align-self: ${props => props.align || 'stretch'};
  &:hover {
    animation: ${rotate} 1s infinite linear;
  }

  ${props =>
    props.primary &&
    css<ButtonProps>`
      color: ${props => props.color || props.theme.colors.primary};
      background: ${props => props.background || props.theme.colors.primary};
    `}
  ${props =>
    props.outlined &&
    css<ButtonProps>`
      color: ${props => props.color || props.theme.colors.primary};
      border: 1px solid ${props => props.color || props.theme.colors.primary};
      background: transparent;
    `}
`

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`

export const Button = ({ children, ...props }: ButtonProps) => {
  return <LargeButton {...props}>{children}</LargeButton>
}
