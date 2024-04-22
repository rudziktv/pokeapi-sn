import KartaPokemuna from "./KartaPokemuna";

function ListaPokemonow({ przekazywanie, pokazPokemona }) {
    function pokliknieciu(url) {
        console.log(url);
        pokazPokemona(url);
    }

    return (
        <div id="lista-pokow">
            {/* {przekazywanie.map((p) => (
                <p onClick={() => pokliknieciu(p.url)} key={p.name}>
                    {p.name}
                </p>
            ))}
            <p>cokolwiek</p> */}
            {przekazywanie.map((p) => (
                <KartaPokemuna
                    key={p.name}
                    pokemon={p}
                    klik={() => pokliknieciu(p.url)}
                />
            ))}
        </div>
    );
}

export default ListaPokemonow;
