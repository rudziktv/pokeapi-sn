import { useRef, useState } from "react";
import "./App.css";
import ListaPokemonow from "./ListaPokemonow";
import Popup from "./Popup";

function App() {
    const [wybranyPokemon, setWybranyPokemon] = useState(null);
    const [listaumiejetnosci, setUmiejetnosci] = useState([]);
    const [listaPoksow, setListaPokemonow] = useState([]);

    // ref to to samo co document.getElementById("id") tyle że dla reacta
    // daje dostęp do znacznika html
    const modalRef = useRef(null);

    function Test() {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setListaPokemonow(data.results);
            });
    }
    return (
        <>
            <button onClick={Test}>Pobierz Pokemony</button>
            <ListaPokemonow
                przekazywanie={listaPoksow}
                pokazPokemona={(url) => {
                    fetch(url)
                        .then((res) => {
                            return res.json();
                        })
                        .then((data) => {
                            // przypisanie do stanu danych pokemona
                            setWybranyPokemon(data);
                            if (modalRef) {
                                modalRef.current.showModal();
                            }
                            console.log(data);
                        });
                }}
            />
            <Popup referencja={modalRef} pokemon={wybranyPokemon} />
        </>
    );
}

export default App;
