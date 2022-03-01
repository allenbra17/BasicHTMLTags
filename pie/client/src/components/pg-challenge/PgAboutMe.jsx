function AboutMe(props) {

    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.location}</h4>
            <ul style={{textAlign: 'left'}}>Places I've Been{props.favoritePlaces.map((list) =>(
                <li>{list}</li>
                ))}
            </ul>
            <ul style={{textAlign: 'left'}}>Favorite Foods{props.favoriteFoods.map((list) =>(<li>{list}</li>))}
            </ul>
        </div>
    )
}

export default AboutMe;