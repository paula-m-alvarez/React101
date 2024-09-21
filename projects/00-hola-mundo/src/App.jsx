import './App.css'

export function App() {
  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://media.istockphoto.com/id/1443562748/es/foto/lindo-gato-de-jengibre.jpg?s=612x612&w=0&k=20&c=JVC5Z3LxpaTQaXu_fMZjIb73r39z6b0SnAxvNI8iZG0=" />
        <div className='tw-followCard-info'>
          <strong>Paula Alvarez</strong>
          <span className='tw-followCard-infoUserName'>@paulidev</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}

