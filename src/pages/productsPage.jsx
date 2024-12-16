import React ,{useState} from 'react'
import UseProduct from '../hooks/useProduct'
import ListProducts from '../components/listProducts'
import Navbar from '../components/navbar'
function ProductPage() {
  const { data, isLoading, isError, error, isFetching, setLimit, limit , searchTerm,setSearchTerm} = UseProduct()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [basket , setBasket] = useState([])
  
  return (
    <div className='h-full  ' >
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} basket={basket} setBasket={setBasket} />
      <ListProducts data={data} isLoading={isLoading} isError={isError} error={error} isFetching={isFetching} setLimit={setLimit} limit={limit} isDrawerOpen={isDrawerOpen} setBasket={setBasket} basket={basket}  />
    </div>
  )
}

export default ProductPage
