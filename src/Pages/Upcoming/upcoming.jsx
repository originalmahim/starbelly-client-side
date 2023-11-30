import  { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';

const Upcoming = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const { data: brands = [] } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await axios.get('https://starbelly-eta.vercel.app/upcoming');
      return res.data;
    },
  });

  const offset = currentPage * itemsPerPage;
  const paginatedBrands = brands.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(brands.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
          <title>Starbelly | Upcoming Meals</title>
          </Helmet>
      <div className="text-center text-xl text-black mt-8 mb-16">
        <h1 className="lg:text-5xl text-4xl font-semibold">Upcoming Meals</h1>
        <p>Our ALL Upcoming Meals Items Are on Specific Cards</p>
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
                  </div>
                </div>
                <div className="mt-4 flex  items-center justify-between">
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

export default Upcoming;