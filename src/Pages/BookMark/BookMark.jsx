import { useLoaderData } from 'react-router'


const BookMark = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <h1>book mark</h1>
    </div>
  )
}

export default BookMark
