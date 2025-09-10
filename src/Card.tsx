interface CardProps {
    name: string;
    model: string;
    passengers: string;
}
const Card = ({name, model, passengers}: CardProps) => {
    return (
        <>
            <div style={ {border: "2px solid black", backgroundColor: "#454545", borderRadius: "7px", padding: "5px", margin: "10px" }}>
                <h3>Star Wars Vehicles</h3>
                <p>Name: {name}</p>
                <p>Model: {model}</p>
                <p>Passengers: {passengers}</p>
            </div>
        </>
    )
}

export default Card;