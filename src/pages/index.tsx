import headerDictionary from '@/dictionary/header'
import dictionary from '@/dictionary/home'

export default function Home() {
  return (
    <div>
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

      <main className='prose max-w-none text-center px-60'>
        <div className="py-20">
          <h2 className='m-0 uppercase text-6xl'>{dictionary['brandon']}</h2>
          <p className='my-10'>{dictionary['and']}</p>
          <h2 className='m-0 uppercase text-6xl'>{dictionary['elaine']}</h2>
        </div>

        <div>
          <h3>{dictionary['wedding-date']}</h3>
          <h4>{dictionary['wedding-city']}</h4>
        </div>

        <div>
          <h3>{dictionary['how-we-met-heading']}</h3>
          <p>{dictionary['how-we-met-description']}</p>
        </div>
        <div>
          <h3>{dictionary['the-proposal-heading']}</h3>
          <p>{dictionary['the-proposal-date']}</p>
          {dictionary['the-proposal-description'].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </main>
      <footer className='prose max-w-none text-center mt-60 mb-20'>
        <h2>Bundi Technologies</h2>
      </footer>
    </div>
  )
}
