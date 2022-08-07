import { useNProgress } from '@tanem/react-nprogress'

import { Bar } from './Bar'
import { Container } from './Container'

interface IProgressProps {
  isAnimating: boolean
}

export const Progress = ({ isAnimating }: IProgressProps) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  })

  return (
    <Container animationDiration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  )
}
