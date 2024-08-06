import './index.css'
import mapIcon from './assets/map-icon.svg'
import mountFuji from './assets/MountFuji.png'
import sydneyOperaHouse from './assets/SydneyOperaHouse.png'
import geirangerfjord from './assets/Geirangerfjord.png'

export default function Card(props) {
    let image
    if(props.imageUrl === 'MountFuji.png') {
        image = mountFuji
    } else if(props.imageUrl === 'SydneyOperaHouse.png') {
        image = sydneyOperaHouse
    } else {
        image = geirangerfjord
    }
    return (
        <>
            <section className="card">
                <img
                    src={image}
                    className="card-image"
                />
                <div className="card-content">
                    <div className="location-container">
                        <img src={mapIcon} alt="map icon" />
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