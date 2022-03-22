import LocationIcon from "../images/location-icon.png"

export default function Card(props) {
	return (
		<div className="wrapper">
			<div className="card">
				<img className="card--img" src={props.item.imageUrl} alt={`img ${props.item.id}`} ></img>
				<div className="card--content">
					<img className="card--location-icon" src={LocationIcon} alt="location-icon"></img>
					<span className="card--location-text">{props.item.location}</span>
					<a className="card--google-link" href={props.item.googleMapsUrl} target="_blank" >View on Google Maps</a>
					<h1 className="card--title">{props.item.title}</h1>
					<h5 className="card--dates">{props.item.startDate} - {props.item.endDate}</h5>
					<p className="card--text">{props.item.description}</p>
				</div>
			</div>
			<hr />
		</div>
		
	)
}