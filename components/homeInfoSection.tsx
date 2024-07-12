import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function HomeInfoSection() {
  return (
    <section className="desktop-container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 p-12">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg">Hours of Operation</h3>
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <span>Mon</span>
                <span>11 AM - 11 PM</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <span>Tues</span>
                <span>11 AM - 11 PM</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <span>Wed</span>
                <span>11 AM - 11 PM</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <span>Thurs</span>
                <span>11 AM - 11 PM</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <span>Fri</span>
                <span>11 AM - 12 AM</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <span>Sat</span>
                <span>10 AM - 12 AM</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <span>Sun</span>
                <span>10 AM - 11 PM</span>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-12">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-4">Location</h3>
              <span className="text-light-brown">471 5th Ave.</span>
              <span className="text-light-brown">Brooklyn, NY 11215</span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <div className="text-light-brown flex items-center gap-2">
                <FaPhone className="text-beige" />
                <span>1 (718) 971-1684</span>
              </div>
              <div className="text-light-brown flex items-center gap-2">
                <FaEnvelope className="text-beige" />
                <span>sipnplaynyc@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-12">
          <h3 className="font-bold text-lg mb-4">How It Works</h3>
          <p>
            Come on in with your friends and family and play boardgames from our
            collection of over 500+ games!
            <br></br>
            <br></br>
            Just $10 a person for 3 hours of gameplay. ($12 a person
            Friday-Sunday and Holidays)
            <br></br>
            <br></br>
            Play while enjoying bubble tea, coffee, beer sandwiches or salads
            and have a great time!
            <br></br>
            <br></br>
            If you want to guarantee a table, you can make a reservation which
            is $15 a person for 3 hours of gameplay.
          </p>
        </div>
      </div>
    </section>
  );
}
