import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Card from '../../Card'
import {
  FadeOut, FADE_OUT_DURATION, FADE_IN_DURATION, FancyIn,
} from '../../../assets/styles/animations'

interface Props {
  message: string;
  messageDuration?: number;
}

interface StyleProps{
  anim: 'fadeIn' | 'fadeOut'
}

const Container = styled.div<StyleProps>`
  animation: ${(props) => (props.anim === 'fadeIn' ? FancyIn : FadeOut)};
  display: block;

  position: relative;
`

function Reaction({ message, messageDuration = 3000 }: Props) {
  const [showMessage, setShowMessage] = useState<boolean>(true)
  const [anim, setAnim] = useState<'fadeIn' |'fadeOut'>('fadeIn')

  useEffect(() => {
    setTimeout(() => {
      setAnim('fadeOut')

      setTimeout(() => {
        setShowMessage(false)
      }, FADE_OUT_DURATION - 50)
    }, messageDuration + FADE_IN_DURATION)
  }, [messageDuration])

  return showMessage ? (
    <Container anim={anim} data-test-id='message'>
      <Card text={message} />
    </Container>
  ) : null
}

export default Reaction
