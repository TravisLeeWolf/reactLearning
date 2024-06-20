import badgeRound from '/badge-round.png'
import styles from '../assets/rotation.module.css'

function MainHeader() {
  return (
    <header>
        <nav className="flex items-center justify-between p-2 shadow-lg bg-blue-400 text-white">
          <a className='flex items-center space-x-2' href="https://travisthecoder.com">
            <img className={`h-10 w-auto ${styles.rotate}`} src={badgeRound} alt="Badge Round" />
          </a>
          <div className='text-2xl'>React Projects</div>
          <div className='space-x-2'>
            <a className='p-1 border border-black rounded shadow-md bg-white text-black font-semibold' href='https://www.travisthecoder.com' target='_blank'>Home</a>
            <a className='p-1 border border-black rounded shadow-md bg-white text-black font-semibold' href='https://projects.travisthecoder.com' target='_blank'>Back to Projects</a>
          </div>
        </nav>
      </header>
  )
}

export default MainHeader