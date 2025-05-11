import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../Wrapper/wrapper';
import { backend_url } from '../../utils/Config';
import ProductWithOption from '../../shared/ProductWithOption';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchQuery = searchParams.get('search');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const { data } = await axios.get(
          `${backend_url}/api/v1/products/search/?search=${searchQuery}`
        );
        
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  return (
    <Wrapper>
      <h1 className='text-center bg-night text-amber-300'>Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className='flex flex-row gap-5 bg-night flex-wrap p-3'>
          {products.map((product,id) => (
            <ProductWithOption key={id} pID={product?._id} urls={product.product_Images[0]} product_name={product.name}
            price={product.price}
            />
          ))}
        </div>
      ) : (
        <div className='flex flex-row gap-5 bg-night flex-wrap p-3'>
     <p className='text-white'>No results found for "{searchQuery}"</p>
        </div>
   
      )}
    </Wrapper>
  );
};

export default SearchResult;
