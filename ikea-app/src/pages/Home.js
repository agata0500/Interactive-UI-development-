import React from "react";
import BottomNav from "../components/BottomNav";

function Home() {
  const sleepTips = [
    {
      title: "How to layer a bed for summer",
      description:
        "Considering how much the temperature varies throughout the year, wouldn’t it be odd to use the same bedding year-round? Instead, get the bed ready for summer by changing to cooling pillows, mattress protectors, duvet covers and pillowcases made of materials that absorb moisture and feel cool against the skin.",
      image:
        "https://www.ikea.com/ext/ingkadam/m/2fc8da7544c42f56/original/PH203841.jpg?f=xxl", // Replace with updated link if needed
      link: "https://www.ikea.com/us/en/rooms/bedroom/how-to/how-to-layer-a-bed-for-summer-pub92e05aa0/",
    },
    {
      title: "What are the best bedroom blinds for you?",
      description:
        "With bedroom blinds you can get more privacy and give the room a new look. You can also make sure that moonlight, street lights and the early morning sun won’t stop you from enjoying a refreshing night’s sleep. We have lots of ideas and tips below to help you find the best blinds for you.",
      image:
        "https://www.ikea.com/images/a-sofa-bed-used-as-a-bed-stands-in-front-of-windows-with-sch-ae30b487ff8a36b29cef42fe7e136a26.jpg?f=xxl", // Example
      link: "https://www.ikea.com/us/en/rooms/bedroom/how-to/what-are-the-best-bedroom-blinds-for-you-pub435eaf80/",
    },
    {
      title: "Smart bedroom storage hacks",
      description:
        "Looking for extra bedroom storage? There are many ways to put unused and perhaps unusual spaces to smart use. You just need to be a little creative to find them and turn them into clever stowaways. Here are some ideas to get you started.",
      image:
        "https://www.ikea.com/images/a-bed-with-a-pine-bed-frame-made-with-white-black-checked-be-3d5f918883b1203ab9ce1072850440b1.jpg?f=xxl",
      link: "https://www.ikea.com/us/en/rooms/bedroom/how-to/smart-bedroom-storage-hacks-in-unused-spaces-pub9e612fc0/",
    },
  ];
  return (
    <div className="home">
      <h1>Sleep better with IKEA</h1>

      {/*  Music Section */}
    <section className="playlist">
  <h2>Calming Playlist</h2>
  <div className="spotify-embed-container">
    <iframe
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0"
      width="100%"
      height="180"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Sleep playlist"
    ></iframe>
  </div>
</section>


      {/* 💡 Tips Section */}
      <section className="sleep-tips">
        <h2>Tips for a better night’s sleep</h2>
       <div className="tips-container">
  {sleepTips.map((tip, index) => (
    <div className="tip-card" key={index}>
      <img src={tip.image} alt={tip.title} />
      <h3>{tip.title}</h3>
      <p>{tip.description}</p>
      <a href={tip.link} target="_blank" rel="noopener noreferrer">
        View Product →
      </a>
    </div>
  ))}
</div>

      </section>

      <BottomNav />
    </div>
  );
}

export default Home;
