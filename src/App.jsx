import logo from "./assets/logo.png";
import laquinta from "./assets/laquinta.svg";
import wingate from "./assets/wingate.svg";
import comfort from "./assets/comfort.png";
import people from "./assets/people.jpg";
import kansas from "./assets/kansas.webp";
import construct from "./assets/construct.webp";
import "./App.css";
import bg from "./assets/jake-fagan-rMaKy1DdcbI-unsplash.jpg";
import { frontDesk } from "./assets/imagelist";
import { useEffect } from "react";

const App = () => {
  const images = {
    one: "https://images.unsplash.com/photo-1683914791874-2dcb78e58e09?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyMXx8SG90ZWwlMjBhbmQlMjBob3NwaXRhbGl0eXxlbnwwfHx8fDE2OTg4NTk3NTl8MA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
    two: "https://images.unsplash.com/photo-1683914791864-b32fe9c45029?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyM3x8SG90ZWwlMjBhbmQlMjBob3NwaXRhbGl0eXxlbnwwfHx8fDE2OTg4NTk3NTl8MA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
    three:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxfHxIb3RlbCUyMGFuZCUyMGhvc3BpdGFsaXR5fGVufDB8fHx8MTY5ODg1OTc1OXww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
    four: "https://images.unsplash.com/photo-1657000666840-308fc3f4de93?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw5fHxIb3RlbCUyMGFuZCUyMGhvc3BpdGFsaXR5fGVufDB8fHx8MTY5ODg1OTc1OXww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
    foodplate: frontDesk,
    panfood:
      "https://images.unsplash.com/photo-1621494547944-5ddbc84514b2?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw0fHxIb3RlbCUyMGFuZCUyMGhvc3BpdGFsaXR5fGVufDB8fHx8MTY5ODg1OTc1OXww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
    kansas: kansas,
    event: construct,
  };

  const companies = [laquinta, wingate, comfort];
  const service = [
    {
      img: images.foodplate,
      title: "Exceptional Customer Service",
      desc: "Experience personalized service from our dedicated team, ensuring your every need is met with care.",
    },
    {
      img: images.kansas,
      title: "Prime Location",
      desc: " Stay in the heart of Kansas City, with easy access to top attractions, shopping, and entertainment.",
    },
    {
      img: images.one,
      title: "Comfortable & Affordable Accommodations",
      desc: " Indulge in our elegant rooms and suites, offering supreme comfort and stunning city views at affordable rates.",
    },
    // {
    //   img: images.event,
    //   title: "Relaxing Spa and Wellness",
    //   desc: "Business Management in Real Estate, Retail, and Hospitality",
    // },
  ];

  const team = [
    {
      img: "https://kcgalaxy.com/wp-content/uploads/2023/09/jaypatel-scaled-e1696095490257.jpeg",
      name: "Jay Patel",
    },
    {
      img: images.four,
      name: "Avinash Patel",
    },
    {
      img: images.three,
      name: "Jaymin Patel",
    },
  ];

  const startAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "animate-slideFromBottom",
        entry.isIntersecting
      );

      // If the element is intersecting, stop observing it
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: "0px", threshold: 1 };

    const elements = document.querySelectorAll(".cardAnimation");
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Clean up the observer when the component unmounts
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <section className="min-h-[100vh] overflow-hidden relative px-5 ">
        <img
          className="z-[-1] absolute w-[100%] left-0 top-0 h-[100%] object-cover"
          src={bg}
        />
        <div className="bg-image-page absolute z-[0]"></div>
        <div className="relative z-10 h-[100vh]">
          <header className="flex justify-between bg-transparent z-2 items-center h-[80px]">
            <div className="flex items-center">
              <img
                className="h-[30px] w-auto filter invert-[1] mr-2"
                src={logo}
                alt=""
              />
              <h3 className="font-medium text-2xl text-white">
                J&A Management
              </h3>
            </div>
            <button className=" border-white  bg-transparent font-bold border-2 text-white">
              Contact Us
            </button>
          </header>
          <div className="flex flex-col justify-center items-center height-banner cardAnimation">
            <p className="xxs:text-4xl md:text-7xl !leading-tight max-w-3xl text-white text-center mb-5 font-oswald">
              Experience Management in a New Way Kansas City, MO
            </p>
            <p className="xxs:text-xl md:text-2xl max-w-3xl mb-[80px] text-white text-center leading-8 font-quattrocento tracking-wide">
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
      <section className="xxs:px-5 xxs:py-8 sm:p-13 md:pt-28 flex flex-col items-center justify-center ">
        <div className="cardAnimation">
          <p className="xxs:text-base md:text-xl font-quattrocento text-white max-w-4xl text-center px-4  ">
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
          <div className="flex items-center justify-center w-full mt-5">
            <img
              className="h-[30px] w-auto filter invert-[1] mr-2"
              src={logo}
              alt=""
            />
            <h3 className="font-medium text-2xl text-white">J&A Management</h3>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap xxs:px-5 xxs:py-8 sm:p-13   justify-center  border-box cardAnimation">
        {service?.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-wrap justify-center items-center transition ease-in-out mb-10 duration-500  opacity-100 translate-y-0 max-w-[450px] xxs:w-full md:w-[38%] lg:w-1/2 xxs:mx-5 md:mx-10"
            >
              <img
                className="w-full rounded-3xl middle-image"
                src={item?.img}
                alt="alt"
              />
              <h4 className=" mt-3 text-white text-center text-2xl">
                {item?.title}
              </h4>
              <p className="text-lg text-center leading-5 mt-2 text-white font-quattrocento ">
                {item?.desc}
              </p>
            </div>
          );
        })}
      </section>
      <section className="bg-shade xxs:px-5 xxs:py-8 sm:p-13 md:py-28 cardAnimation">
        <h1 className="text-white mb-16 text-center">Our Partners</h1>
        <div className="flex flex-wrap xxs:gap-5 md:gap-16 justify-center">
          {companies?.map((item, i) => {
            return (
              <div className="xxs:w-full sm:w-1/2 md:w-1/3" key={i}>
                <img
                  src={item}
                  className="rounded-2xl h-[200px] w-full object-contain bg-white p-6"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="bg-shade xxs:px-5 xxs:py-8 sm:p-13 md:py-28 md:px-12 flex justify-center items-center cardAnimation"
        id="read-more"
      >
        <div className="flex flex-wrap w-full max-w-6xl items-center justify-center xxs:gap-10 md:gap-0">
          <img
            src={people}
            alt=""
            className="rounded-3xl xxs:w-full md:w-1/2 lg:w-2/5 max-w-[450px]"
          />
          <div className="rich-text-block md:pl-10 xxs:w-full md:w-1/2 lg:w-3/5">
            <h2 className="whitespace-pre-line text-white text-3xl mb-4">
              About J&amp;A Management
            </h2>
            <p className="text-[18px] mb-4 text-white font-quattrocento">
              J&A Management Company is a family owned and operated company that
              strives on providing excellent customer service across a wide
              range of businesses including real estate, retail, and
              hospitality.  As a trusted partner in these industries, we manage
              top rated portfolios ensuring that each property meets the highest
              standards of quality and customer satisfaction.
            </p>
            <p className="text-[18px] mb-4 text-white font-quattrocento">
              Providing the highest quality of excellent customer service has
              been our goal since the beginning.  With our extensive experience
              and dedication to excellence, we strive to provide exceptional
              service and unforgettable experiences. We strive for a positive
              work environment to secure the long-term financial well-being of
              our company.
            </p>
            <p className="text-[18px] text-white font-quattrocento">
              J&A Management Company’s mission is to provide our owners with the
              highest possible rate of return on their business.  We use a
              unique approach to business development to implement a set of
              well-defined centralized controls for our clients. 
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#272727] xxs:px-5 xxs:py-8 sm:p-13 md:py-28 md:px-12 w-full  justify-center flex  flex-col  items-center cardAnimation">
        <h3 className="text-3xl text-white mb-10 ">Our Team</h3>
        <div className="w-full flex flex-wrap gap-14 justify-center ">
          {team?.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col flex-wrap justify-center items-center "
              >
                <img
                  src={item?.img}
                  className="rounded-[50%] h-[200px] w-[200px] object-cover"
                />
                <br />
                <p className="text-xl font-oswald text-white max-w-4xl text-center ">
                  {item?.name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-[#333333] xxs:px-5 xxs:py-8 sm:p-13 md:py-28 md:px-12 w-full  justify-center flex  flex-col items-center cardAnimation">
        <h3 className="text-3xl text-white mb-6 ">Testimonials</h3>
        <p className="text-xl font-quattrocento text-white max-w-4xl text-center mb-12 ">
          I had an amazing experience at J&A Management! The hotel staff was
          incredibly friendly and accommodating, making my stay comfortable and
          memorable. The hospitality provided was top-notch, and I would highly
          recommend their services to anyone visiting Kansas City. Thank you for
          a wonderful stay!
          <br />
          <br />- Amisbyte
        </p>
      </section>{" "}
      <section className=" xxs:px-5 xxs:py-8 sm:p-13 md:py-28 md:px-12 w-full  justify-center flex flex-col items-center bg-[#393939] cardAnimation">
        <div className="flex flex-wrap xxs:gap-5 md:gap-0 w-full md:px-10 max-w-6xl ">
          <div className="text-left xxs:w-full md:w-1/2 pr-20">
            <h2 className="text-white text-2xl mb-3">Contact Us </h2>
            <p className="text-white font-quattrocento">
              Fill out the form below to get in touch with us. We are here to
              assist you with any inquiries or requests you may have. We can`t
              wait to hear from you!
            </p>
          </div>
          <div className="xxs:w-full md:w-1/2 flex flex-wrap">
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
      <footer className="bg-shade xxs:px-5 xxs:py-8 sm:p-13 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-[30px] w-auto filter invert-[1] mr-2"
            src={logo}
            alt=""
          />
          <h3 className="font-medium text-2xl text-white">J&A Management</h3>
        </div>
        <p className="  bg-transparent font-bold  text-white text-right">
          Powered by Amisbyte
        </p>
      </footer>
    </>
  );
};

export default App;
