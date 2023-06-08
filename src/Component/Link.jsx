function Link({link}){
    return(
        <div className="Card__link-container">
            <a href={link} className="Card__link">SHARE</a>
            <a href={link} className="Card__link">LEARN MORE</a>
        </div>
    )
}
export default Link;