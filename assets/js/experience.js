AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Artificial Intelligence Engineer",
    cardImage: "assets/images/experience-page/nippzon.png",
    place: "Nippzon Technologies, Dhaka, Bangladesh",
    time: "(Jan, 2023 - Nov, 2023)",
    desp: "<li> Developing and implementing a sophisticated <strong>video anomaly detection</strong> system for a prominent Japanese news TV channel. This system autonomously identifies and logs various anomalies, including sound errors, black screen incidents, freezing frames, and text errors, ensuring the highest level of broadcast quality and viewer experience.</li> <li>My task also involves utilizing a variety of advanced algorithms, including computer vision and machine learning techniques such as OCR and NLP, to accurately extract Japanese characters from the video stream.</li>",
  },
  {
    title: "Trainee Machine Learning Engineer",
    cardImage: "assets/images/experience-page/IITkgp.png",
    place: "IIT Kharagpur, West Bengal, India",
    time: "(Jun, 2022 - Jan, 2023)",
    desp: "<li> 7-month long full-time training program fully funded by the Government of India and the Bangladesh Hi-Tech Park Authority (BHTPA)</li> <li>The training focused on Artificial Intelligence, Machine Learning, and Deep Learning</li>",
  },
  {
    title: "Artificial Intelligence Engineer",
    cardImage: "assets/images/experience-page/zantrik.jpeg",
    place: "Zantrik, Dhaka, Bangladesh",
    time: "(Mar, 2020 - May, 2022)",
    desp: "<li>As a team member, I contributed to the development of a Computer Vision desktop-based application called <b>Digital Garage</b>. My contributions are data scrapping, annotation, pre-processing,training with <b>YOLOv4</b> model and building the GUI using <b>Kivy</b> framework. Implemented a login UI using <b>Firebase, HTML, CSS, JavaScript</b>. Also worked on IP camera integration for the app.</li> <li>Worked on <b>data scrapping</b> and model training for arms detection using <b>YOLOv4</b> and TFlite conversion for an android app named <b>Digital Driver</b></li> <li>Worked on a chatbot called ”Zantrik Mind” using <b>Rasa</b> framework.</li>",
  },
  {
    title: "Trainee Data Scientist",
    cardImage: "assets/images/experience-page/fujitsu.png",
    place: "Fujitsu Research Institute , TOKYO, Japan",
    time: "(Sept - Dec, 2019)",
    desp: "<li>It was a 3 months long full-time training especially on Data Science & Machine Learning which is fully funded scholarship program by “ICT Division” and “Bangladesh Hi-tech Park Authority” of People’s Republic of Bangladesh where I secured <b>81st</b> Merit Position among 4,000+ candidate in selection exam at BUET.</li><li>Analyzed customer’s buying behavior pattern form a convenient shop’s sale dataset and proposed different business models to increase revenue. Also, Predicted next year’s power consumption of a house.</li>",
  },
  {
    title: "Trainee Software Engineer",
    cardImage: "assets/images/experience-page/ntitas.png",
    place: "Ntitas IT Ltd, Dhaka, Bangladesh",
    time: "(Jan, 2018 - May, 2018)",
    desp:"<li>Designed and implemented a CMS (Content Management System) using .Net core.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ul>
              ${desp}
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Debating Forum of IUBAT (DFI)",
    cardImage: "assets/images/experience-page/dfi.png",
    description:
      "Event Manager(2015-2016)",
  },
  {
    title: "Kaler Kantho Shovo Shongo, IUBAT",
    cardImage: "assets/images/experience-page/kkss.png",
    description:
      "Secretary(2016-2017)",
  },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   {
//     title: "The Uplift Project",
//     subtitle: "Metor",
//     image: "assets/images/experience-page/uplift.png",
//     desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
//   },
//   {
//     title: "ULHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/ulhacks.png",
//     desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//   },
//   {
//     title: "WaffleHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/wafflehacks.png",
//     desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//   },
//   {
//     title: "Elevate Tech",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/elevate.png",
//     desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//   },
//   {
//     title: "PitchTeen",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/pitchteen.png",
//     desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
//   },
//   {
//     title: "Hack-A-Solution",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hackasolution.png",
//     desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//   },
//   {
//     title: "UniGlobe Hacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/uniglobe.png",
//     desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//   },
//   {
//     title: "AtlasHacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/atlas.png",
//     desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//   },
//   {
//     title: "NeoHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/neo.png",
//     desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//   },
//   {
//     title: "Mission Inspired",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/mission.png",
//     desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//   },
//   {
//     title: "Hack3",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hack3.png",
//     desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//   },
//   {
//     title: "JITHack",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/jithack.png",
//     desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//   },
//   {
//     title: "Recess Hacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/recess.png",
//     desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//   },
//   {
//     title: "Citro Tech",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/citro.png",
//     desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//   },
//   {
//     title: "NHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/nhacks.png",
//     desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//   }
  

// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp}) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="#" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
