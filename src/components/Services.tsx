import BathingDog from "../assets/images/bathing-dog-2.png";
import WalkingDogs from "../assets/images/dog-walking.png";
import GroomerTools from "../assets/images/groomer-tools.png";

const Services = () => {
  return (
    <section
      id="services"
      data-observer
      data-index="2"
      className="md:px-20 lg:px-40 bg-white text-center md:pb-40 mt-10"
    >
      <p>WHAT DO WE DO</p>
      <p className="text-3xl mb-20 mt-5">The Best Care For Our Best Friends</p>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="relative flex-1/3">
          <div className="top-0 right-0 left-0 bottom-0 absolute">
            <p className="absolute text-6xl font-bold left-[50%] top-[50%] text-purple-500 translate-x-[-50%] translate-y-[-50%]">
              Grooming
            </p>
          </div>
          <img
            src={GroomerTools}
            alt="Groomer Tools"
            className="w-full aspect-square object-cover hover:opacity-20 duration-200 isolate"
          />
        </div>
        <div className="relative flex-1/3">
          <div className="top-0 right-0 left-0 bottom-0 absolute">
            <p className="absolute text-6xl font-bold left-[50%] top-[50%] text-purple-500 translate-x-[-50%] translate-y-[-50%]">
              Wash & De-Fur
            </p>
          </div>
          <img
            src={BathingDog}
            alt="Groomer Tools"
            className="w-full aspect-square object-cover hover:opacity-20 duration-200 isolate"
          />
        </div>
        <div className="relative flex-1/3">
          <div className="top-0 right-0 left-0 bottom-0 absolute">
            <p className="absolute text-6xl font-bold left-[50%] top-[50%] text-purple-500 translate-x-[-50%] translate-y-[-50%]">
              Walking & Exercise
            </p>
          </div>
          <img
            src={WalkingDogs}
            alt="Groomer Tools"
            className="w-full aspect-square object-cover hover:opacity-20 duration-200 isolate"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
