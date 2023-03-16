import styled from 'styled-components'

interface TitleProps {
  children: React.ReactNode
  color?: string
}

const StyledTitle = styled('h1')`
  color: ${props => props.color || props.theme.colors.primary};
`

export const Title = ({ children, ...props }: TitleProps) => {
  return <StyledTitle {...props}>{children}</StyledTitle>
}
