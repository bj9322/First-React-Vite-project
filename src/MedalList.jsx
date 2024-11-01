import MedalItem from "./MedalItem";

function MedalList({ countries, onEdit, onDelete }) {
    return (
        <ul>
            {countries.map((country) => (
                <MedalItem
                    key={country.id}
                    country={country}
                    onEdit={() => onEdit(country.id)}
                    onDelete={() => onDelete(country.id)}
                />
            ))}
        </ul>
    );
}

export default MedalList;