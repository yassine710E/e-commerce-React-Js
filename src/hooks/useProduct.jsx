import { useState } from 'react'
import { useQuery } from 'react-query'
import UseDebounce from './useDebounce'
function UseProduct() {
    const [limit, setLimit] = useState(8)
    
    const [searchTerm,setSearchTerm] = useState('')

    const debounceSearchTerm = UseDebounce(searchTerm,1000)


    const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/product/search?q=${searchTerm}&limit=${limit}`)
        const REST_API = await response.json()
        console.log(REST_API)
        return REST_API

    }

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["products", limit,debounceSearchTerm],
        queryFn: fetchProducts,
        keepPreviousData: true
    })
    return { data, isLoading, isError, error, isFetching, setLimit, limit , searchTerm,setSearchTerm}
}

export default UseProduct
