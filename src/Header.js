import React from 'react'
import MealSelector from './MealSelector'

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <div>
                    <p>{props.label}</p>
                </div>
                <div className="times">
                    <p>{props.starttime} am - {props.endtime} pm </p>
                </div>
                <MealSelector 
                    setSelectedMeal={props.setSelectedMeal}
                />
            </div>
        </div>
    )
} 

export default Header;