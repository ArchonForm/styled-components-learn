import styled from 'styled-components'

interface FlexProps {
  direction?: string
  align?: string
  justify?: string
  margin?: string
  children: React.ReactNode
}

const StyledFlex = styled('div')<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || 0};
`

export const Flex = ({ children, ...props }: FlexProps) => {
  return <StyledFlex {...props}>{children}</StyledFlex>
}
