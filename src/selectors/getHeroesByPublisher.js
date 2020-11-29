import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publihser) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publihser)) {
        throw new Error(`Publihser "${publihser}" no es correcto`);
    }

    return heroes.filter( (heroe) => heroe.publisher == publihser);
}