import  { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';

const Meals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const { data: brands = [] } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await axios.get('https://starbelly-eta.vercel.app/allmeals');
      return res.data;
    },
  });

  const filteredBrands = brands
    .filter((brand) =>
      brand.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((brand) =>
      selectedCategory ? brand.category === selectedCategory : true
    )
    .filter(
      (brand) =>
        brand.price >= priceRange.min && brand.price <= priceRange.max
    );

  const categories = [...new Set(brands.map((brand) => brand.category))];

  const offset = currentPage * itemsPerPage;
  const paginatedBrands = filteredBrands.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredBrands.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
          <title>Starbelly | Meals</title>
          </Helmet>
      <div className="text-center text-xl text-black mt-8 mb-16">
        <h1 className="lg:text-5xl text-4xl font-semibold">All Meals</h1>
        <p>Our ALL Meals Items Are on Specific Cards</p>
      </div>
      <div className='flex items-center gap-8 justify-center'>
        <div>
          <h1 className='my-3 text-xl'>Search by Meal title</h1>
          <input
            type="text"
            placeholder="Search here....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
        </div>
        <div>
          <h1 className="my-3 text-xl">Filter by Category</h1>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 mb-4 w-full"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1 className="my-3 text-xl">Filter by Price Range</h1>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min Price"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.valueAsNumber })
              }
              className="border p-2 w-full"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.valueAsNumber })
              }
              className="border p-2 w-full"
            />
          </div>
        </div>
      </div>

      <div className="lg:px-0 px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {paginatedBrands.map((brand) => (
          <div key={brand._id} className="relative bg-yellow-400 mx-auto w-full shadow-lg rounded-lg ">
            <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
              <div className="shadow p-4 rounded-lg bg-white">
                <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                  <div
                    className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full"
                    style={{ backgroundImage: `url("${brand?.imageUrl}")`, backgroundSize: 'cover' }}
                  >
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                  </div>
                  <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-yellow-500 text-sm font-medium text-black select-none">
                    {brand?.category}
                  </span>
                </div>
                <div className="text-left text-xl font-semibold my-2">
                  <h1>{brand?.title}</h1>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(4)].map((_, index) => (
                      <FaStar key={index} className="w-4 h-4 text-yellow-300" />
                    ))}
                    <FaStar className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div className="mt-4 flex  items-center justify-between">
                  <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                    ${brand?.price}
                  </h2>
                  <Link to={`/meal/${brand?._id}`}>
                    <button className="btn bg-yellow-400 text-black">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex  items-center justify-center">
        <ReactPaginate
          previousLabel={<i className="fas fa-chevron-left"></i>}
          nextLabel={<i className="fas fa-chevron-right"></i>}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Meals;

