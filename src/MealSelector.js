import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

const MealSelector = (props) => {
    const handleMealChange = (selectedMeal) => {
        props.setMeal(selectedMeal)
    }
    
    const handleDietChange = (selectedDiet) => {
        props.setDiets(selectedDiet)
    }

    const vegan = 4
    const vegitarian = 1
    const glutonFree = 9

    return (
        <div className="selectors" style={{ left: '100px'}}>
            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={"breakfast"} onChange={handleMealChange}>
                    <ToggleButton style={{ width: '90px', borderRadius: '5px 0 0 0'}} value={"breakfast"}>Breakfast</ToggleButton>
                    <ToggleButton style={{ width: '90px', borderRadius: '0'}} value={"lunch"}>Lunch</ToggleButton>
                    <ToggleButton style={{ width: '90px', borderRadius: '0 5px 0 0'}} value={"dinner"}>Dinner</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup type="checkbox" name="options" defaultValue={[]} onChange={handleDietChange}>
                    <ToggleButton style={{ width: '90px', borderRadius: '0 0 0 5px'}} value={vegan}>
                        <div className="icon center mb-10">
                            <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-668e3c.png?v=1528869577" alt="vegan"/>
                        </div>
                    </ToggleButton>
                    <ToggleButton style={{ width: '90px', borderRadius: '0'}} value={vegitarian}>
                        <div className="icon center mb-10">
                            <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-c9d18b.png?v=1528869517"alt="vegitarian"/>
                        </div>
                    </ToggleButton>
                    <ToggleButton style={{ width: '90px', borderRadius: '0 0 5px 0'}} value={glutonFree}>
                        <div className="icon center mb-10">
                            <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-ce9d00.png?v=1528869625" alt="gluton free"/>
                        </div>
                    </ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default MealSelector