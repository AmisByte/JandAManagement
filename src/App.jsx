import logo from "./assets/logo.png";
import laquinta from "./assets/laquinta.svg";
import wingate from "./assets/wingate.svg";
import comfort from "./assets/comfort.svg";
import people from "./assets/people.jpg";
import kansas from "./assets/kansas.webp";
import event from "./assets/event.jpeg";
import "./App.css";
import bg from "./assets/jake-fagan-rMaKy1DdcbI-unsplash.jpg";
const images = {
  one: "https://images.unsplash.com/photo-1683914791874-2dcb78e58e09?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyMXx8SG90ZWwlMjBhbmQlMjBob3NwaXRhbGl0eXxlbnwwfHx8fDE2OTg4NTk3NTl8MA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
  two: "https://images.unsplash.com/photo-1683914791864-b32fe9c45029?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyM3x8SG90ZWwlMjBhbmQlMjBob3NwaXRhbGl0eXxlbnwwfHx8fDE2OTg4NTk3NTl8MA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
  three:
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxfHxIb3RlbCUyMGFuZCUyMGhvc3BpdGFsaXR5fGVufDB8fHx8MTY5ODg1OTc1OXww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
  four: "https://images.unsplash.com/photo-1657000666840-308fc3f4de93?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw5fHxIb3RlbCUyMGFuZCUyMGhvc3BpdGFsaXR5fGVufDB8fHx8MTY5ODg1OTc1OXww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
  foodplate:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxM3x8SG90ZWwlMjBhbmQlMjBob3NwaXRhbGl0eXxlbnwwfHx8fDE2OTg4NTk3NTl8MA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
  panfood:
    "https://images.unsplash.com/photo-1621494547944-5ddbc84514b2?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw0fHxIb3RlbCUyMGFuZCUyMGhvc3BpdGFsaXR5fGVufDB8fHx8MTY5ODg1OTc1OXww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
  kansas: kansas,
  event: event,
};
function App() {
  return (
    <>
      <section className="min-h-[100vh] overflow-hidden relative pl-5 pr-10 ">
        <img
          className="z-[-1] absolute w-[100%] left-0 top-0 h-[100%] object-cover"
          src={bg}
        />
        <div className="bg-image-page absolute z-[0]"></div>
        <div className="relative z-10 h-[100vh]">
          <header className="flex justify-between bg-transparent z-2 items-center h-[80px]">
            <div className="flex items-center">
              <img
                className="h-[80px] w-auto filter invert-[1]"
                src={logo}
                alt=""
              />
              <h3 className="ml-[-15px] mt-1 font-medium text-2xl text-white">
                J&A Management
              </h3>
            </div>
            <button className=" border-white  bg-transparent font-bold border-2 text-white">
              Contact Us
            </button>
          </header>
          <div className="flex flex-col  justify-center items-center height-banner ">
            <p className="text-[76px] max-w-3xl text-white text-center leading-[84px] mb-5 mt-[-80px] font-oswald">
              Experience Management in a New Way Kansas City, MO
            </p>
            <p className="text-2xl max-w-3xl text-white text-center leading-8 font-quattrocento tracking-wide">
              Indulge in our exceptional services and dedication in the business
              management service.
            </p>
          </div>
          {/* <svg
            className="absolute bottom-0 left-0"
            width="1464"
            height="801"
            viewBox="0 0 1464 801"
          >
            <clipPath id="banner-0-pointDown">
              <rect width="1464" height="712" fill="transparent"></rect>
              <path
                d="M0 0L732 89L1464 0H0"
                transform="translate(0, 712)"
                fill="transparent"
              ></path>
            </clipPath>
          </svg> */}
        </div>
      </section>
      <section className="xs:px-10 pt-24 pb-10 flex flex-col items-center justify-center ">
        <p className="text-xl font-quattrocento text-white max-w-4xl text-center  ">
          Are you in need of a reliable partner to manage your business in
          Kansas City? Look no further than J&A Management. With our expertise
          in the industry, we offer comprehensive solutions tailored to your
          specific needs. From efficient operation management to strategic
          marketing campaigns, our team is dedicated in maximizing your
          business`s success. Trust J&A Management to elevate your business or
          venture to new heights in Kansas City.
          <a className="text-white underline ml-2" href="#read-more">
            click here
          </a>
        </p>
        <div className="flex items-center">
          <img
            className="h-[80px] w-auto filter invert-[1]"
            src={logo}
            alt=""
          />
          <h3 className="ml-[-15px] mt-1 font-medium text-2xl text-white">
            J&A Management
          </h3>
        </div>
      </section>
      <section className="flex flex-wrap m-10  justify-center gap-10 border-box">
        <div className="flex flex-col items-center transition ease-in-out mb-10 duration-500  opacity-100 translate-y-0 max-w-[450px] w-1/2 mx-10">
          <img
            className="w-full rounded-3xl middle-image"
            src={images.foodplate}
            alt="alt"
          />
          <h4 className=" mt-3 text-white text-2xl">
            Exceptional Customer Service
          </h4>
          <p className="text-lg text-center leading-5 mt-2 text-white font-quattrocento mt-1">
            Experience personalized service from our dedicated team, ensuring
            your every need is met with care.
          </p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out mb-10 duration-500  opacity-100 translate-y-0 max-w-[450px] w-1/2 mx-10">
          <img
            className="w-full rounded-3xl middle-image"
            src={images.kansas}
            alt="alt"
          />
          <h4 className=" mt-3 text-white text-2xl">Prime Location</h4>
          <p className="text-lg text-center leading-5 mt-2 text-white font-quattrocento mt-1">
            Stay in the heart of Kansas City, with easy access to top
            attractions, shopping, and entertainment.
          </p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out mb-10 duration-500  opacity-100 translate-y-0 max-w-[450px] w-1/2 mx-10">
          <img
            className="w-full rounded-3xl middle-image"
            src={images.event}
            alt="alt"
          />
          <h4 className=" mt-3 text-white text-2xl">
            Relaxing Spa and Wellness
          </h4>
          <p className="text-lg text-center leading-5 mt-2 text-white font-quattrocento mt-1">
            Revitalize your senses with rejuvenating spa treatments and modern
            fitness facilities.
          </p>
        </div>
        {/* <div className="flex flex-col items-center transition ease-in-out mb-10 duration-500  opacity-100 translate-y-0 max-w-[450px] w-1/2 mx-10">
          <img
            className="w-full rounded-3xl middle-image"
            src={images.event}
            alt="alt"
          />
          <h4 className=" mt-3 text-white text-2xl">
            Unparalleled Event Spaces
          </h4>
          <p className="text-lg text-center leading-5 mt-2 text-white font-quattrocento mt-1">
            Host your next memorable event or business meeting in our
            state-of-the-art venues with flawless service.
          </p>
        </div> */}

        <div className="flex flex-col items-center transition ease-in-out mb-10 duration-500  opacity-100 translate-y-0 max-w-[450px] w-1/2 mx-10">
          <img
            className="w-full rounded-3xl middle-image"
            src={images.one}
            alt="alt"
          />
          <h4 className=" mt-3 text-white text-2xl">
            Comfortable & Cozy Accommodations
          </h4>
          <p className="text-lg text-center leading-5 mt-2 text-white font-quattrocento mt-1">
            Indulge in our elegant rooms and suites, offering supreme comfort
            and stunning city views.
          </p>
        </div>

        {/* <div className="flex flex-col items-center transition ease-in-out mb-10 duration-500  opacity-100 translate-y-0 max-w-[450px] w-1/2 mx-10">
          <img
            className="w-full rounded-3xl middle-image"
            src={images.three}
            alt="alt"
          />
          <h4 className=" mt-3 text-white text-2xl">
            Exquisite Dining Options{" "}
          </h4>
          <p className="text-lg text-center leading-5 mt-2 text-white font-quattrocento mt-1">
            Savor delightful culinary creations prepared by our world-class
            chefs, using only the finest ingredients.
          </p>
        </div> */}
      </section>
      <section className="bg-shade p-20">
        <h1 className="text-white mb-16 text-center">Our Partners</h1>
        <div className="flex flex-wrap gap-20 justify-center">
          <div className="w-1/4 ">
            <img
              src={laquinta}
              className="rounded-2xl h-[200px] w-full object-contain bg-white p-6"
              alt=""
            />
          </div>
          <div className="w-1/4 ">
            <img
              src={wingate}
              className="rounded-2xl h-[200px] w-full object-contain bg-white p-6 px-10"
              alt=""
            />
          </div>
          <div className="w-1/4 ">
            <img
              src={comfort}
              className="rounded-2xl h-[200px] w-full object-contain bg-white p-6"
              alt=""
            />
          </div>
          {/* <div className="w-1/4 ">
            <img
              src={tenStar}
              className="rounded-2xl h-[200px] w-full object-cover bg-white "
              alt=""
            />
          </div> */}
        </div>
      </section>
      <section
        className="bg-shade p-32 py-28 flex justify-center"
        id="read-more"
      >
        <img src={people} alt="" className="rounded-3xl h-[350px]" />
        <div className="rich-text-block pl-10">
          <h2 className="whitespace-pre-line text-white text-3xl mb-4">
            About J&amp;A Management
          </h2>
          <p className="text-[18px] mb-4 text-white font-quattrocento">
            J&amp;A Management is a leading hotel and hospitality company based
            in Kansas City, MO, USA. With our extensive experience and
            dedication to excellence, we strive to provide exceptional service
            and unforgettable experiences to our guests.
          </p>
          <p className="text-[18px] text-white font-quattrocento">
            As a trusted partner in the industry, we manage a portfolio of
            top-rated hotels and resorts, ensuring that each property meets the
            highest standards of quality and customer satisfaction. Our team of
            skilled professionals is committed to delivering personalized
            service and creating a welcoming atmosphere for all our guests. At
            J&amp;A Management, we are passionate about hospitality and take
            pride in exceeding expectations every step of the way.
          </p>
        </div>
      </section>
      <section className="bg-[#272727] px-10 py-20 w-full  justify-center flex  flex-col  items-center">
        <h3 className="text-3xl text-white mb-10">Our team</h3>
        <div className="grid-cols-3 grid gap-20">
          <div>
            <img
              src={
                "https://kcgalaxy.com/wp-content/uploads/2023/09/jaypatel-scaled-e1696095490257.jpeg"
              }
              className="rounded-[50%] h-[200px] w-[200px] object-cover"
            />
            <br />
            <p className="text-xl font-oswald text-white max-w-4xl text-center ">
              Jay Patel
            </p>
          </div>{" "}
          <div>
            <img
              src={images.four}
              className="rounded-[50%] h-[200px] w-[200px]"
            />
            <br />
            <p className="text-xl font-oswald text-white max-w-4xl text-center object-cover">
              Avinash Patel
            </p>
          </div>
          <div>
            <img
              src={images.three}
              className="rounded-[50%] h-[200px] w-[200px]  object-cover"
            />
            <br />
            <p className="text-xl font-oswald text-white max-w-4xl text-center ">
              Jaymin Patel
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#333333] p-10 w-full  justify-center flex  flex-col items-center">
        <h3 className="text-3xl text-white mb-6">Testimonials</h3>
        <p className="text-xl font-quattrocento text-white max-w-4xl text-center mb-12">
          I had an amazing experience at J&A Management! The hotel staff was
          incredibly friendly and accommodating, making my stay comfortable and
          memorable. The hospitality provided was top-notch, and I would highly
          recommend their services to anyone visiting kansas. Thank you for a
          wonderful stay!
          <br />
          <br />- Amisbyte
        </p>
      </section>{" "}
      <section className=" p-10 py-16 w-full  justify-center flex flex-col items-center bg-[#393939] ">
        <div className="flex w-full px-10">
          <div className="text-left w-1/2 pr-20">
            <h2 className="text-white text-2xl mb-3">Contact Us </h2>
            <p className="text-white font-quattrocento">
              Fill out the form below to get in touch with us. We are here to
              assist you with any inquiries or requests you may have. We can`t
              wait to hear from you!
            </p>
          </div>
          <div className="w-1/2 flex flex-wrap">
            <div className="flex w-1/2 flex-col pr-4">
              <label className="text-white mr-2 font-quattrocento">Name</label>
              <input
                type="text"
                className="w-full rounded-md h-[36px] bg-[#464646]"
              />
            </div>
            <div className="flex w-1/2 flex-col pl-4">
              <label className="text-white mr-2 font-quattrocento">
                E-mail
              </label>
              <input
                type="text"
                className="w-full rounded-md h-[36px] bg-[#464646]"
              />
            </div>
            <div className="flex w-full flex-col mt-5">
              <label className="text-white mr-2 font-quattrocento">
                Message
              </label>
              <textarea
                type="text"
                rows={4}
                className="w-full rounded-md bg-[#464646]"
              />
            </div>
            <button className="mt-5 text-white font-quattrocento bg-transparent border-white">
              Submit
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-shade p-5 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-[80px] w-auto filter invert-[1]"
            src={logo}
            alt=""
          />
          <h3 className="ml-[-15px] mt-1 font-medium text-2xl text-white">
            J&A Management
          </h3>
        </div>
        <p className="  bg-transparent font-bold  text-white pr-12">
          Powered by Amisbyte
        </p>
      </footer>
    </>
  );
}

export default App;
