import Image from 'next/image'


function createData(
  time: string,
  content: string,
) {
  return { time, content };
}

const agenda = [
  createData("10:00 AM", "Check in"),
  createData("10:15 AM", "Keynote Speaking"),
  createData("10:30 AM", "Water Quality/Conservation topic introduction & Rules"),
  createData("10:45 AM", "Workshops / Coding"),
  createData("12:00 PM", "Lunch / Coding"),
  createData("1:00 PM", "Workshops / Coding"),
  createData("6:00 PM", "Dinner / Coding"),
  createData("7:30 PM", "Presentations"),
  createData("8:00 PM", "Awards"),
  createData("8:30 PM", "Clean up & Pick up"),
  createData("9:00 PM", "Door will be closed"),
]

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" 
        href="https://www.cpmentorship.org/events/tahoma-hacks"  target='blank'>
          Compass Point Mentorship&nbsp;
          <code className="font-mono font-bold"></code>
        </a>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/tahomahacks.png"
              alt="Tahoma Hacks Logo"
              className="dark"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen min-w-screen
      	  after:absolute after:-z-20 after:h-[380px] after:w-[240px] after:translate-x-1/3 
	        after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl 
	        after:content-[''] after:bottom-40 after:left-40
	        after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 ">
        <p className="text-7xl self-center">
          TAHOMA HACKS 2023
        </p>
        <br/>
        <p className="text-xl self-center">
          June 4th, 2023 10AM - 9PM
        </p>
        <br/>
        <a className='text-sm self-center  hover:bg-blue-900 hover:underline active:bg-blue-900 active:underline active:font-bold'  href="https://goo.gl/maps/Pr4cGPDQqGswGZGk7" target='blank'>
        285 Blossom Hill Road
        San Jose, CA 95123
        </a>
        <a className='text-sm self-center hover:bg-blue-900 hover:underline active:bg-blue-900 active:underline active:font-bold' href="https://goo.gl/maps/Pr4cGPDQqGswGZGk7"  target='blank'>
        (entrance at 5520 Eagles Lane)
        </a>
        <br/>
        <br/>
        <a href="https://www.cpmentorship.org/events/tahoma-hacks"  target='blank'>
        <button className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Register Now
          </button>
        </a>
      


      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          What is Tahoma Hacks?{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Tahoma Hacks is a Hackathon. It is an all-day event suitable for middle schoolers to high schoolers for you to learn how to code. There will be Free Food, $500 worth of prizes, and gift cards. Tahoma Hacks is special because it caters to kids with little to no coding experience giving the option to use easier coding languages.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          What are hackathons?{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          A hackathon is an all-day event, with Free Food, where middle schoolers and high schoolers get in groups and compete to solve a a topic around a theme for prizes. There will also be speakers at the beginning and end of the event telling us their storys.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          What is the theme?{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          The theme is water conservation or water management. This event will show the importance to conserve water and how people can make a change. 
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Where and When?{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Tahoma Hacks will take place at Summit Public High School : Tahoma <br/> (285 Blossom Hill Rd, San Jose, CA 95123) <br/>from 10 am to 9 pm on June 4th. <br/>A Parent or Guardian must be their to sign the student in.
          </p>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
      <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
            <table className= "border-spacing-6 border-separate">
              <thead className='border-solid border border-slate-50 pb-6'>
                <tr>
                  <th className='mb-8'></th>
                  <th className='text-left text-2xl font-semibold px-6'>
                  Agenda
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm opacity-50 px-6">
                {agenda.map((row) => (
                  <tr 
                    key={row.time}
                    className='px-6'
                  >
                    <td className="text-right  px-3">
                     {row.time}
                    </td>
                    <td className="text-left  px-6">
                      {row.content}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

                
        </div>

      </div>
     
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <p className='text-2xl font-semibold px-6' >Soponsors</p>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <Image
              src="/cpmentorship.png"
              alt="cpmentorship Logo"
              className="dark"
              width={400}
              height={96}
              priority
            />
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <Image
              src="/valleywater.png"
              alt="valleywater Logo"
              className="dark"
              width={400}
              height={96}
              priority
            />
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <Image
              src="/hackclub.png"
              alt="hack club Logo"
              className="dark"
              width={400}
              height={96}
              priority
            />
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <Image
              src="/summit public high schools.png"
              alt="summit public high schools Logo"
              className="dark"
              width={400}
              height={96}
              priority
            />
        </div>
      </div>

    </main>

  )
}
