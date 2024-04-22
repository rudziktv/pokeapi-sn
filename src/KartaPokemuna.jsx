import "./App.css";

function KartaPokemuna({ pokemon, klik }) {
    return (
        <div className="pokemon-card" onClick={klik}>
            <p>{pokemon?.name}</p>
        </div>
    );
}

export default KartaPokemuna;
