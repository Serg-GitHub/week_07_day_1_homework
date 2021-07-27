import React, {useState} from "react";
import FilmButton from "../components/FilmButton";
import ButtonList from "../components/ButtonList";


const ButtonBox = () => {
    const [FilmButton, setButton] = useState(
        [
            { id:1,
           name: "View here for upcoming releases >>",
           url: "https://www.imdb.com/calendar/?region=gb"
          }
        ]
        )

         return(
            <>
            <ul>
              <li>
             <a class="button" href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a>
              </li>
            </ul>

            </>
           );
}
export default ButtonBox;