import { FaStar } from "react-icons/fa";
const MyReviews = () => {
          return (
<div>
          <h1 className="text-xl font-semibold">My All Reviews Are Here </h1>
          <div>
                    <ul>
                      <li>
                    <div className="container flex flex-col w-full  p-6 mx-auto divide-y border-2 my-2 rounded-md bg-white">
                    <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                    <div>
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                    </div>
                    <div>
                    <h4 className="font-bold text-black">Leroy Jenkins</h4>
                    <span className="text-xs text-black">2 days ago</span>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500">
                    <FaStar></FaStar>
                    <span className="text-xl font-bold">4.5</span>
                    </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm text-black">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                    </div>
                    </div>
                    </li>
                    </ul>
                    </div>                    
          </div>
          );
};

export default MyReviews;