import React from 'react'
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {

    const publisher = 'DC Comics';

    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
            
            <div className="animate__animated  animate__slideInLeft">
                <HeroList publisher={publisher} />
            </div>

        </div>
    )
}
