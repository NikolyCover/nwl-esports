import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateaddBanner() {
    return (
        <div className='mt-8 pt-1 bg-nwl-gradient self-stretch rounded-lg overflow-hidden '>
        <div className='bg-[#2A2634] px-8 py-6 self-stretch flex justify-between'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncion para encontrar novos players!</span>
          </div>

          <Dialog.DialogTrigger className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </Dialog.DialogTrigger>
        </div>
      </div>
    )
}