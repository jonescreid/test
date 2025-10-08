export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
            <img 
              src="/Ambassadors Headshot.jpg" 
              alt="Carson Jones" 
              className="w-full h-full object-cover object-center"
              style={{
                objectPosition: 'center center'
              }}
            />
          </div>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-gray-900 tracking-wide">
          Carson Jones
        </h1>
        
        {/* School Information */}
        <div className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light">
          University of South Carolina
        </div>
      </div>
    </main>
  )
}
