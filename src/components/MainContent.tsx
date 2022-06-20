interface IMainContentProps {
  children: JSX.Element
}

export default function MainContent({ children }: IMainContentProps) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-main bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  )
}
