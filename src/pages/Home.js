import AlexaZodiac from "../images/AlexaZodiac.png";
import AngiePhotography from "../images/Angie'sPhotography.PNG";
import Forums from "../images/Forums.PNG";
import ShoppingList from "../images/ShoppingList.PNG";
import ShoppingListDetails from "../images/ShoppingListDetails.PNG";
import ShoppingListLogin from "../images/ShoppingListLogin.PNG";
import Unimeet from "../images/Unimeet.PNG";



const Home = () => {
    return (
        <div className="body">
            <div className="pageContainer">
                <h1 className="pageMainHeading">Welcome</h1>
                <p className="intro">Hello! My name is Kaitlin and my interests are in mobile development (Android) and web development.
                <br/>Feel free to check out some of my projects below!</p><br/>

                <img 
                className="forumsPic"
                src={Forums}
                height="500px"
                width="250px"
                alt="Forums app screenshot"
              />

<div className="pageText">
                    <p>Text
                    </p>
                </div>
                
            </div>
        </div>
      )
  };
  
  export default Home;
  