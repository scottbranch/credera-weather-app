import React from "react"

const WeatherBlock = props => {
  const { description, iconClass, key } = props

  return (
    <div>
      <p>Sun</p>
      <i className={iconClass}></i>
      <p>
        90<sup>&deg;</sup>
      </p>
      <p>{description}</p>
    </div>
  )
}

export default WeatherBlock
