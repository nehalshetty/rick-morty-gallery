import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import styled from 'styled-components';
import { CharacterBasicInfo } from './types/character';

interface CharactersResp {
  status: number;
  data: {
    results: CharacterBasicInfo[];
  } | null;
}

const MainSection = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const [characters, setCharacters] = useState<CharacterBasicInfo[]>([]);

  const getCharacters = async () => {
    const resp: CharactersResp = await axios.get('https://rickandmortyapi.com/api/character');

    if (resp.status === 200 && resp.data) {
      setCharacters(resp.data.results);
    }
    console.log({ resp });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <MainSection className="App">
      {characters.map((val) => (
        <CharacterCard key={val.id} basicInfo={val} />
      ))}
    </MainSection>
  );
};

export default App;
