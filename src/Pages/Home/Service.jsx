
import { FaUtensils, FaApple, FaCarrot, FaClock, FaRegClock, FaHome } from "react-icons/fa";

const Service = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-black">
                Explore our meal plan services designed to meet your dining needs.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap text-black">
          <ServiceCard
            title="Diverse Menus"
            details="Enjoy a variety of cuisines with our diverse menu options."
            icon={<FaUtensils size={36} />}
          />
          <ServiceCard
            title="Healthy Choices"
            details="Opt for nutritious meals with our selection of fresh fruits and vegetables."
            icon={<FaApple size={36} />}
          />
          <ServiceCard
            title="Vegetarian Options"
            details="Discover delicious vegetarian options to suit your dietary preferences."
            icon={<FaCarrot size={36} />}
          />
          <ServiceCard
            title="Quick Service"
            details="Save time with our quick and efficient meal service."
            icon={<FaClock size={36} />}
          />
          <ServiceCard
            title="Flexible Dining Hours"
            details="Enjoy meals at your convenience with our flexible dining hours."
            icon={<FaRegClock size={36} />}
          />
           <ServiceCard
            title="Delivery at Home"
            details="Get your meals delivered to your doorstep with our home delivery service."
            icon={<FaHome size={36} />}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-yellow-400">
          {icon}
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-black">
          {title}
        </h4>
        <p className="text-black">{details}</p>
      </div>
    </div>
  );
};

export default Service;
