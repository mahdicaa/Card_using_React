import Photo from "./Photo";
import Title from "./Title";
import Description from "./Description";
import Button from "./Button";

function Card(props){
    return(
        <div>
            <Photo photo={props.photo}/>
            <Title title={props.title}/>
            <Description description={props.description}/>
            <Button button={props.button}/>
        </div>
    )
}
export default Card;