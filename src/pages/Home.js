import image from "../images/agrochain.png";
function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex place-self-center text-xl font-extrabold mt-6">
        Welcome to Finny
      </div>
      <img src={image} className="h-[300px] w-60 shadow mt-5"></img>
      <div className="mt-5 px-2 text-center">
         Empowering farmers and buyers in a trusted, unified supply chain ecosystem.
      </div>
      <div className="px-2 text-justify font-thin mt-1">
        Finny is an innovative decentralized application (dApp) meticulously crafted to revolutionize the agricultural supply chain. 
        This pioneering platform is engineered to optimize and elevate every facet of agricultural commerce, delivering an unparalleled and trustworthy ecosystem for farmers and buyers alike. 
        By harnessing the power of smart contracts, Finny ensures transparent, secure, and efficient transactions, while its advanced lending system offers robust financial support, addressing the industry's most pressing challenges. With Finny, participants can anticipate a transformative experience, where technology meets agriculture to foster sustainability, reliability, and growth in the global marketplace.{" "}
      </div>
    </div>
  );
}

export default Home;
