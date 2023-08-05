// Write your code here

import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
    console.log(data)
  return (
    <div className="list-container">
      <img src={imageUrl} alt="cross" className="image" />
      <h1 className="head">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
