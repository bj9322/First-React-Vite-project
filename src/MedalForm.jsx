// MedalForm.jsx
import { useState, useEffect } from "react";

function MedalForm({ onAddOrUpdate, editingCountry }) {
    const [countryName, setCountryName] = useState("");
    const [gold, setGold] = useState('');
    const [silver, setSilver] = useState('');
    const [bronze, setBronze] = useState('');

    // editingCountry가 변경될 때마다 입력 필드를 업데이트
    useEffect(() => {
        if (editingCountry) {
            setCountryName(editingCountry.name);
            setGold(editingCountry.gold);
            setSilver(editingCountry.silver);
            setBronze(editingCountry.bronze);
        }
    }, [editingCountry]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddOrUpdate({ name: countryName, gold: parseInt(gold), silver: parseInt(silver), bronze: parseInt(bronze) });
        setCountryName("");
        setGold('');
        setSilver('');
        setBronze('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="나라 이름"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="금메달"
                min="0"
                value={gold}
                onChange={(e) => setGold(Math.max(0, parseInt(e.target.value)))}
                required
            />
            <input
                type="number"
                placeholder="은메달"
                min="0"
                value={silver}
                onChange={(e) => setSilver(Math.max(0, parseInt(e.target.value)))}
                required
            />
            <input
                type="number"
                placeholder="동메달"
                min="0"
                value={bronze}
                onChange={(e) => setBronze(Math.max(0, parseInt(e.target.value)))}
                required
            />
            <button type="submit">{editingCountry ? "업데이트" : "추가"}</button>
        </form>
    );
}

export default MedalForm;