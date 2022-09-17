import { Game } from './interfaces/Game'
import './styles/main.css'

import * as Dialog from '@radix-ui/react-dialog'
import logoImg from './assets/logo-nwl-esports.svg'

import { GameBanner } from './components/GameBanner'
import { CreateaddBanner } from './components/CreateAddBanner'

import { useEffect, useState } from 'react'

import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt=''></img>

      <h1 className='text-6xl text-white font-black m-20'>
        Seu <span className='text-transparent bg-nwl-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => (
          <GameBanner key={game.id} tittle={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.ads}/>
        ))}
      </div>

      <Dialog.Root>
        <CreateaddBanner/>
        <CreateAdModal/>
      </Dialog.Root>
    </div>
  )
}

export default App
