import { heroes } from '../data/heroes'

export const getHeroesByFilterName = (Filter = '') => {

    Filter = Filter.toUpperCase().trim();
    
    if(Filter === '' ) return [];

    
    
    return heroes.filter( heroe => heroe.superhero.toUpperCase().includes(Filter) );

}