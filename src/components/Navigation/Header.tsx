import { useEffect, useState } from 'react'
import Button from '../Button'
import { useRouter } from 'next/router'
import { SearchIcon, BellIcon } from '@heroicons/react/solid'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../slices/userSlice'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

interface INavigationLinkItem {
  link: string
  title: string
}

const LINKS = [
  { id: 1, link: '/', title: 'Home' },
  { id: 2, link: '/shows', title: 'TV Shows' },
  { id: 3, link: '/movies', title: 'Movies' },
  { id: 4, link: '/popular', title: 'Popular' },
  { id: 5, link: '/list', title: 'My List' },
]

export default function Header() {
  const router = useRouter()
  // user authenticated
  const { data: session } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearched, setIsSearched] = useState(false)

  // isScrolled inside the component
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const goTo = (link): void => {
    router.push(link)
  }

  const onChangeIsSearched = (e) => {
    setIsSearched(!isSearched)
    console.log(isSearched)
  }

  const logOut = (): void => {
    signOut()
  }

  return (
    <header
      className={`transition-all duration-300 ease-out ${
        !session || (isScrolled ? 'bg-netflixBg' : 'bg-transparent')
      } fixed top-0 left-0 z-10 flex w-full justify-center ${
        session && 'py-2'
      } `}
    >
      <div className={`mx-8 flex w-full items-center justify-between lg:mx-10`}>
        <div className="flex items-center gap-8">
          <div className={`${session ? 'w-24' : 'w-20 md:w-44'}`}>
            <img
              alt=""
              src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
              className="w-full object-cover"
            />
          </div>
          {session && (
            <ul className="hidden space-x-6 text-white md:flex">
              {LINKS.map((item) => (
                <NavigationLinkItem
                  key={item.id}
                  link={item.link}
                  title={item.title}
                />
              ))}
            </ul>
          )}
        </div>

        {session ? (
          <div className="flex grow items-center justify-end gap-4">
            <form className="flex w-full items-center justify-end">
              <input
                type="text"
                placeholder="Buscar.."
                className={`ml-10 w-2/5 ${
                  isSearched ? 'block' : 'hidden'
                } rounded-md border-none bg-netflixBg px-4 py-2 text-white focus:outline-none`}
              />
              <button
                type="button"
                className="mr-4 flex items-center gap-2 text-white"
                onClick={onChangeIsSearched}
              >
                <SearchIcon className="h-5 w-5 text-white" />
                Search
              </button>
            </form>

            <button>
              <BellIcon className="h-5 w-5 text-white" />
            </button>
            <img
              alt=""
              src={session?.user?.image}
              className="h-8 w-8 rounded-full object-cover hover:cursor-pointer"
              onClick={logOut}
            />
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Button
              label="Acceder"
              textColor="text-black"
              onClick={() => goTo('/')}
            />
            <Button
              label="Iniciar Sesion"
              textColor="text-white"
              bgColor="bg-netflix"
              onClick={() => goTo('/login')}
            />
          </div>
        )}
      </div>
    </header>
  )
}

const NavigationLinkItem = ({ link, title }: INavigationLinkItem) => {
  const router = useRouter()
  const [path, setPath] = useState(router.pathname)

  useEffect(() => {
    setPath(router.pathname)
  }, [link, title])

  return (
    <li
      className={`transition-all duration-300 ease-out ${
        path === link ? 'text-white' : 'text-gray'
      } hover:text-white`}
    >
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </li>
  )
}
