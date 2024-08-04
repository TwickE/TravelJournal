import './index.css'

export default function Card(props) {
    return (
        <section className="card">
            <img
                src={`./src/assets/${props.imageUrl}`}
                className="card-image"
            />
            <div className="card-content">
                <div className="location-container">
                    <img src="./src/assets/map-icon.svg" alt="map icon" />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p>{`${props.startDate} - ${props.endDate}`}</p>
                <p>{props.description}</p>
            </div>
        </section>
    )
}