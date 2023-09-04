import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full bg-gray-900 h-screen flex justify-center items-center flex-col gap-6'>
      <h2 className='text-white text-3xl font-bold'>Page Not Found</h2>
      <p className='text-gray-300'>Could not find requested resource</p>
      <Link href="/" className='bg-blue-500 p-3 rounded-full hover:bg-blue-800 hover:text-white transition duration-500'>Return Home</Link>
    </div>
  )
}