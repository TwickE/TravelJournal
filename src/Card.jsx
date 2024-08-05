import './index.css'

export default function Card(props) {
    return (
        <>
            <section className="card">
                <img
                    src={`./public/${props.imageUrl}`}
                    className="card-image"
                />
                <div className="card-content">
                    <div className="location-container">
                        <img src="./src/assets/map-icon.svg" alt="map icon" />
                        <p>{props.location}</p>
                        <a href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <p className='dates'>{`${props.startDate} - ${props.endDate}`}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </section>
            {!props.isLast && <hr />}
        </>
    )
}