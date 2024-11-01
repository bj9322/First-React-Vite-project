// App.jsx
import { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]); 
  const [editingCountryId, setEditingCountryId] = useState(null); 

  const editingCountry = countries.find(country => country.id === editingCountryId);

  const sortCountries = (countries) => {
    return countries.sort((a, b) =>
      b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze
    );
  };

  // 국가 추가/업데이트 함수
  const handleAddOrUpdate = (countryData) => {
    if (editingCountryId) { 
      // 국가 업데이트 기능 함수
      setCountries((prevCountries) =>
        sortCountries(
          prevCountries.map((country) =>
            country.id === editingCountryId ? { ...country, ...countryData } : country
          )
        )
      );
      setEditingCountryId(null); 
    } else {
      // 국가 추가 기능 함수
      const newCountry = { id: Date.now(), ...countryData };
      setCountries((prevCountries) => sortCountries([...prevCountries, newCountry]));
    }
  };

  // 국가 삭제 함수
  const handleDelete = (id) => {
    setCountries((prevCountries) =>
      prevCountries.filter((country) => country.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>2024 파리 올림픽 메달 집계 리스트</h1>
      <MedalForm
        onAddOrUpdate={handleAddOrUpdate}
        editingCountry={editingCountry}
      />
      <div className="medal-section">
        <h2>메달 집계 리스트</h2>
        <MedalList countries={countries} onEdit={setEditingCountryId} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;