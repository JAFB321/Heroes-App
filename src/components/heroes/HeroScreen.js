import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const heroe = getHeroesById(heroeId);

    if (!heroe) {
        return (
            <Redirect to="/" />
        )
    }

    const handleBack = () => {
        history.goBack();
    }

    const { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;


    return (
        <div className="mt-5 ">

            <div className="row">

                <div className="col mb-4 animate__animated animate__backInLeft">
                    <img
                        src={`../assets/heroes/${id}.jpg`}
                        alt={superhero}
                        className="img-thumbnail"
                    />
                </div>

                <div className="col-lg animate__animated animate__fadeIn">
                    <h1>{superhero}</h1>
                    <hr />

                    <ul className="list-group">

                        <li className="list-group-item">
                            <b>Publisher: </b> {publisher}
                        </li>

                        <li className="list-group-item">
                            <b>Alter Ego: </b> {alter_ego}
                        </li>

                        <li className="list-group-item">
                            <b>First Apperance: </b> {first_appearance}
                        </li>
                    </ul>


                    <h4 className="mt-4">Characters:</h4>
                    <p>{characters}</p>

                    <button className="btn btn-outline-primary" onClick={handleBack}>
                        Back
                    </button>

                </div>
            </div>


        </div>
    )
}
