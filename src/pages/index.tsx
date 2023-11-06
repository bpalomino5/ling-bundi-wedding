// Libraries
import { useState } from 'react'
import Image from 'next/image'
// Hooks
import useDictionary from '@/hooks/use-dictionary'

export default function Home() {
  const [locale, setLocale] = useState('en-US')
  const { headerDictionary, homeDictionary: dictionary } = useDictionary(locale)

  return (
    <div>
      <div className='dropdown dropdown-hover not-prose fixed top-5 right-5 z-[1]'>
        <label tabIndex={0} className='btn m-1'>
          <svg className='w-6 h-6' viewBox='0 0 24 24'>
            <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className='p-2 shadow dropdown-content z-[1] menu bg-base-100 rounded-box w-auto'
        >
          <li>
            <a
              className='tooltip tooltip-left'
              data-tip='English'
              onClick={() => setLocale('en-US')}
            >
              🇺🇸
            </a>
          </li>
          <li>
            <a
              className='tooltip tooltip-left'
              data-tip='Español'
              onClick={() => setLocale('es-PE')}
            >
              🇵🇪
            </a>
          </li>
          <li>
            <a
              className='tooltip tooltip-left'
              data-tip='中文'
              onClick={() => setLocale('zh-CN')}
            >
              🇨🇳
            </a>
          </li>
        </ul>
      </div>

      <header className='prose max-w-none text-center mb-6 p-10'>
        <h1>{headerDictionary['page-heading']}</h1>

        <nav className='flex justify-center'>
          <a className='link mx-2'>{headerDictionary['home']}</a>
          <a className='link mx-2'>{headerDictionary['schedule']}</a>
          <a className='link mx-2'>{headerDictionary['travel']}</a>
          <a className='link mx-2'>{headerDictionary['registry']}</a>
          <a className='link mx-2'>{headerDictionary['gallery']}</a>
          <a className='link mx-2'>{headerDictionary['things-to-do']}</a>
          <a className='link mx-2'>{headerDictionary['faqs']}</a>
        </nav>
      </header>

      <div className='flex align-center justify-center text-center min-h-[600px] relative overflow-hidden not-prose'>
        <img
          className='object-cover object-center w-full h-full absolute'
          src='https://images.zola.com/dc9ca42b-c7ed-4aef-894f-89ce403e03cb?w=3000'
          alt='brandon-and-elaine'
        />
      </div>

      <main className='prose max-w-none text-center px-60 pt-20 pb-60'>
        <div className='flex flex-row items-center justify-center relative pb-20'>
          <div className="bg-[url('https://images.zola.com/81efdc62-6bba-4b20-a923-c443fb467708?w=500')] bg-contain bg-no-repeat bg-center h-[415px] w-[178px] block shrink" />
          <div className='flex-1 flex flex-col justify-center'>
            <h2 className='m-0 uppercase text-6xl'>{dictionary['brandon']}</h2>
            <p className='my-10'>{dictionary['and']}</p>
            <h2 className='m-0 uppercase text-6xl'>{dictionary['elaine']}</h2>
          </div>
          <div className='bg-[url("https://images.zola.com/6061366f-10a7-43f8-8b92-3b15cca74567?w=500")] bg-contain bg-no-repeat bg-center h-[415px] w-[178px] block shrink' />
        </div>

        <div>
          <h3>{dictionary['wedding-date']}</h3>
          <h4>{dictionary['wedding-city']}</h4>
        </div>

        <div className='my-20'>
          <div className='bg-[url("https://images.zola.com/86fe04fe-0fc1-4f2c-b8c8-eb5bdf9f3db0?w=500")] bg-contain bg-no-repeat bg-center h-[89px] w-[180px] relative align-middle mx-auto' />
          <h3>{dictionary['how-we-met-heading']}</h3>
          <p>{dictionary['how-we-met-description']}</p>
        </div>

        <div className='my-20'>
          <div className='bg-[url("https://images.zola.com/86fe04fe-0fc1-4f2c-b8c8-eb5bdf9f3db0?w=500")] bg-contain bg-no-repeat bg-center h-[89px] w-[180px] relative align-middle mx-auto' />
          <h3>{dictionary['the-proposal-heading']}</h3>
          <p>{dictionary['the-proposal-date']}</p>
          {dictionary['the-proposal-description'].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </main>
      <footer className='prose max-w-none text-center'>
        <hr className="mx-60"/>
        <div className='p-20'>
          <h2>Bundi Technologies</h2>
        </div>
      </footer>
    </div>
  )
}
