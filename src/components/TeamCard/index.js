// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, imageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="team-card-container">
      <li className="list">
        <img src={imageUrl} alt={name} className="team-card-image" />
        <p className="team-card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
