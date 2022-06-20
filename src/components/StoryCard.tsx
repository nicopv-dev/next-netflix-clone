interface IStoryCardProps {
  children?: JSX.Element
  border?: boolean
}

export default function StoryCard({
  children,
  border = false,
}: IStoryCardProps) {
  return (
    <div className={`p-10 ${border && 'border-b border-b-gray'}`}>
      {children}
    </div>
  )
}
