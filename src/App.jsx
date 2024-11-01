// App.jsx
import { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]); // coutries는 배열, 각 요소는 국가정보를 포함하는 객체로 구성 / setCountries는 countires를 업데이트 해주는 함수
  const [editingCountryId, setEditingCountryId] = useState(null); // 수정하려는 국가의 ID를 저장, 수정하는 함수

  // country를 순회하면서 editingCountryId 와 country.id 일치하는 첫번째 값을 반환한다.
  const editingCountry = countries.find(country => country.id === editingCountryId);

  // 정렬 함수: 금, 은, 동메달 수 기준으로 정렬
  const sortCountries = (countries) => {
    return countries.sort((a, b) =>
      b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze
    );
  };

  // 국가 추가/업데이트 함수
  const handleAddOrUpdate = (countryData) => {
    if (editingCountryId) { // 수정중인 상태라면 이 조건은 특정 국가를 수정할때만 만족
      // 업데이트 기능
      setCountries((prevCountries) =>
        sortCountries(
          prevCountries.map((country) =>
            country.id === editingCountryId ? { ...country, ...countryData } : country
          )
        )
      );
      setEditingCountryId(null); // 업데이트 후 초기화
    } else {
      // 추가 기능
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