import MainContent from './MainContent'

export default function Info() {
  return (
    <MainContent>
      <div className="flex max-w-4xl flex-col items-center gap-4">
        <h1 className="text-center text-7xl font-bold text-white">
          Películas y series ilimitadas y mucho más.
        </h1>
        <p className="text-2xl font-bold text-white">
          Disfruta donde quieras. Cancela cuando quieras.
        </p>
      </div>
    </MainContent>
  )
}
