import React, { useState, useEffect, useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByFilterName } from '../../selectors/getHeroesByFilterName';

const GetParams = (search) => {
    //Parsear QueryString para obtener los valores
    const queryString = require('query-string');
    return queryString.parse(search);
}

export const SearchScreen = ({ history }) => {

    //para obtener los QueryStrings del URL
    const { search } = useLocation();
    const { q = ''} = GetParams(search);


    const [{ filter }, handleInputChange] = useForm({ filter: q });

    const HeroesFiltrados = useMemo(() => getHeroesByFilterName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${filter}`);
    }

    return (
        <div>
            <h1> Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-4">

                    <h2>Search Form</h2>
                    <hr />

                    <form onSubmit={handleSearch}>

                        <input
                            type="text"
                            placeholder="Busca tu heroe..."
                            className="form-control"
                            name="filter"
                            value={filter}
                            onChange={handleInputChange}
                        />

                        <button
                            className="btn btn-block btn-outline-primary mt-2"
                            type="submit">
                            Buscar
                         </button>

                    </form>
                </div>

                <div className="col-8">
                    <h2>Results</h2>
                    <hr />

                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Busca un heroe
                        </div>
                    }

                    {
                       (q !== '' && HeroesFiltrados.length == 0) &&
                       <div className="alert alert-danger">
                           No existe un heroe con el nombre: {q}
                       </div> 
                    }

                    <div className="animate__animated animate__fadeIn ">
                        {
                            HeroesFiltrados.map((heroe) => (
                                <HeroCard heroe={heroe} key={heroe.id} />
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}
