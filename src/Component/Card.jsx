import Photo from "./Photo";
import Title from "./Title";
import Description from "./Description";
import Button from "./Button";

function Card(){
    return(
        <div>
            <Photo/>
            <Title/>
            <Description/>
            <Button/>
        </div>
    )
}
export default Card;