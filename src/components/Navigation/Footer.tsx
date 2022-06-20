import StoryCard from '../StoryCard'

const LINKS = [
  { title: 'Preguntas Frecuentes' },
  { title: 'Contacto' },
  { title: 'Acerca de' },
  { title: 'Terminos y Condiciones' },
  { title: 'Privacidad' },
]

export default function Footer() {
  return (
    <StoryCard>
      <div className="flex flex-col gap-4">
        <h4 className="text-gray">¿Preguntas? Llama al 171 800 835 909</h4>

        <ul className="grid grid-cols-2 gap-1 text-gray sm:grid-cols-3 md:grid-cols-4">
          {LINKS.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </ul>

        <p className="text-xs text-gray">Netflix</p>
      </div>
    </StoryCard>
  )
}

const FooterLink = ({ title }) => {
  return <li className="text-sm">{title}</li>
}
