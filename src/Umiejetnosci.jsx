import { useEffect, useState } from "react";

function Umiejetnosci({ skill }) {
    const [detale, setDetale] = useState(null);

    function pobierz() {
        // console.log(skill.url);
        fetch(skill.url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setDetale(data);
            });
    }

    useEffect(pobierz, []);

    return (
        <div className="skill">
            <div className="skill-header">
                {detale?.names[7].name || skill.name}
            </div>
            <div className="skill-desc">
                {
                    detale?.effect_entries?.find?.(
                        (a) => a.language.name === "en"
                    ).effect
                }
            </div>
        </div>
    );
}

export default Umiejetnosci;
