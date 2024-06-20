function Hero() {
  return (
    <div className="p-2">
      <div className="text-center border border-black rounded-xl shadow-md p-4">
        <div className="flex flex-col space-y-2">
            <h2 className="text-lg">To see the code for these projects check out my GitHub repo here</h2>
            <a className='px-2 py-1 border border-black rounded shadow-md bg-blue-400 text-white font-semibold mx-auto' href='https://github.com/TravisLeeWolf/reactLearning' target='_blank'>React GitHub Repo</a>
            <div className="py-2"></div>
            <p className="text-xs font-bold">This website is also built using React</p>
        </div>
      </div>
    </div>
  )
}

export default Hero