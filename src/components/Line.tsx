import styled from 'styled-components'

interface LineProps {
  color?: string
  children: React.ReactNode
}

const StyledLine = styled('div')<LineProps>`
  color: ${props => props.color || props.theme.colors.primary};
  font-size: 24px;
`

export const Line = ({ ...props }: LineProps) => {
  return <StyledLine {...props} />
}
