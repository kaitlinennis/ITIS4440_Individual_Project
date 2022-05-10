import MyPic from "../images/me.jpg"

const About = () => {
    return (
        <div className="body">

          <div className="pageContainer">
            <h1 className="pageMainHeading">About Me</h1>

            <img 
                className="myPic"
                src={MyPic}
                height="350px"
                width="600px"
                alt="Myself and my dog"
              />

            <div className="pageText halfText">


              <h2 className="aboutIntro">An introduction</h2>

              <p className="aboutText">Hello! My name is Kaitlin Ennis and I'm currently in my senior year of undergrad at UNC Charlotte.</p>
              <p className="aboutText">I was born and raised in Concord, North Carolina which is where I still reside.</p>
              <p className="aboutText">I'm studying Computer Science with a concentration in Web and Mobile Applications, and I'll be graduating with my Bachelor's degree in May of 2022.</p>
              <p className="aboutText">In my free time I love hanging with my dog Ollie, going on fun roadtrips, learning guitar, and am always looking to try out new teas/coffees whenever I can. (:</p>
              <p className="aboutText">I'm passionate about mobile development and enjoy creating my own Android apps during my free time.</p>
              <p className="aboutText">I also have an interest in web development, and have experience working with tools like ReactJs, VueJs, NodeJs, and more!</p>

              
            </div>
          </div>
        </div>
      )
  };
  
  export default About;
  