import Image from 'next/image'
import dynamic from 'next/dynamic'



const DynamicMap = dynamic(() => import('../../components/Map'),{ssr:false});
export default function Home() {
  return (
    <>
    <div className="bg-blue-500 text-white p-10 flex items-center">
      <Image
       src= "/images/skytrain.png"
       width={100}
       height={100}
       alt='train'
       className="mr-4"
      
      />
    <h1 className="text-5xl font-bold">Expo and Millenium Line Skytrain Stations</h1>
  
  </div>
   <DynamicMap/>
   </>
  )
}
