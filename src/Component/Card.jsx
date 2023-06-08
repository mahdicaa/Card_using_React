import Photo from "./Photo";
import Title from "./Title";
import Description from "./Description";
import Link from "./Link";
import './Style.css';


function Card({photo, title, description, link}){
    return(
        <div className="Card">
            <Photo photo={photo}/>
            <Title title={title}/>
            <Description description={description}/>
            <Link link={link}/>
        </div>
    )
}
export default Card;