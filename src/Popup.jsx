import Umiejetnosci from "./Umiejetnosci";

function Popup({ pokemon, referencja }) {
    return (
        <dialog id="pokemon-dialog" ref={referencja}>
            <div id="pokemon-header">
                <span id="pokemon-name">{pokemon?.name}</span>
                <button onClick={() => referencja.current.close()}>X</button>
            </div>
            <img src={pokemon?.sprites.front_default} />
            <span
                style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: 8,
                }}
            >
                Umiejętności
            </span>
            <div id="skill-list">
                {pokemon?.abilities?.map((a) => (
                    // <span key={a.ability.name}>{a.ability.name}</span>
                    <Umiejetnosci key={a.ability.name} skill={a.ability} />
                ))}
            </div>
        </dialog>
    );
}

export default Popup;
