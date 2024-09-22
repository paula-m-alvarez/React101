import { useState } from 'react'

export function TwitterFollowCard({fomatUserName, username, name}) {

  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://media.istockphoto.com/id/1443562748/es/foto/lindo-gato-de-jengibre.jpg?s=612x612&w=0&k=20&c=JVC5Z3LxpaTQaXu_fMZjIb73r39z6b0SnAxvNI8iZG0=" />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}

