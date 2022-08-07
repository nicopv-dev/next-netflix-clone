import { Cast } from '../types'
import { getImageUrl } from '../utils/requests'

interface IMovieCastProps {
  cast: Cast[]
}

export default function MovieCast({ cast }: IMovieCastProps) {
  return (
    <section>
      <h4 className="text-white">Reparto</h4>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {cast.slice(0, 10).map((cast, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="h-40">
              <img
                alt={cast.name}
                src={
                  cast.profile_path
                    ? getImageUrl(cast.profile_path)
                    : 'https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg'
                }
                className="aspect-1 h-full rounded-full object-cover text-white"
              />
            </div>
            <p className="text-white">{cast.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
