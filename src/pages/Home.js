import AlexaZodiac from "../images/AlexaZodiac.png";
import AngiePhotography from "../images/Angie'sPhotography.PNG";
import Forums from "../images/Forums.PNG";
import ShoppingList from "../images/ShoppingList.PNG";
import ShoppingListDetails from "../images/ShoppingListDetails.PNG";
import ShoppingListLogin from "../images/ShoppingListLogin.PNG";
import Unimeet from "../images/Unimeet.PNG";
import Locator from "../images/Locator.PNG"



const Home = () => {
    return (
        <div className="body">
            <div className="pageContainer">
                <h1 className="pageMainHeading">Welcome</h1>
                <p className="intro">Hello! My name is Kaitlin and my interests are in mobile development (Android) and web development.
                <br/>Feel free to check out some of my projects below!</p><br/>


            <div className="projectSection">
                <img 
                className="mobilePic"
                src={Forums}
                height="500px"
                width="250px"
                alt="Forums app screenshot"
                />

                <div className="pageText halfText description1">
                <h2 className="projectName">Forums App</h2>
                    <p>An Android mobile app I created using Firebase and Firestore<br/>
                    for data storage and authentication. This is a Forums app that<br/>
                    lets users log in, create an account, view existing forums,<br/> 
                    create new forums, like other users' forums, view forum<br/>
                    details, and comment on other users' forums.</p>
                </div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>



            <div className="projectSection">
            <img 
                className="mobilePic"
                src={ShoppingList}
                height="500px"
                width="250px"
                alt="Shopping List app screenshot"
                />


                <div className="pageText halfText description1">
                <h2 className="projectName">Shopping List App</h2>
                    <p>An Android mobile app I created using Firebase and Firestore<br/>
                    for data storage and authentication. This is a Shopping List app that<br/>
                    lets users log in, create an account, view existing shopping lists,<br/> 
                    create new lists, add items to lists, check off list items, and invite other<br/>
                    users to their lists.</p>
                </div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="projectSection">
            <img 
                className="mobilePic"
                src={Locator}
                height="500px"
                width="250px"
                alt="Google Maps Locator app screenshot"
                />

                <div className="pageText halfText description1">
                <h2 className="projectName">Driving Directions App</h2>
                    <p>An Android mobile app I created using various Google APIs. Users can<br/>
                     select a start and end location, which is implemened with the Google<br/>
                     Place Autocomplete API (when users start typing they'll receive suggestions).<br/>
                     Users can also view directions between two selected, which is implemented<br/> 
                     using the Google Directions API. Users are then able to see the directions<br/>
                     from two selected locations on a map, in which two markers and a path line<br/>
                     are drawn; the map automatically zooms to these marked directions.</p>
                </div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                
        </div>
        </div>

      )
  };
  
  export default Home;
  