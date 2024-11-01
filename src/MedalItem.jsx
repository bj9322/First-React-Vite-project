// MedalItem.jsx
function MedalItem({ country, onEdit, onDelete }) {
    return (
        <li>
            <span>{country.name}</span>
            <span>🥇 {country.gold}</span>
            <span>🥈 {country.silver}</span>
            <span>🥉 {country.bronze}</span>
            <button onClick={onEdit}>수정</button>
            <button onClick={onDelete}>삭제</button>
        </li>
    );
}

export default MedalItem;