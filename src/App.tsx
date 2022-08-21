import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import styled from 'styled-components';
import { CharacterBasicInfo, CharactersResp, CharLocation } from './types/character';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CharDetailsModal from './components/CharDetailsModal';

const MainSection = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const [characters, setCharacters] = useState<CharacterBasicInfo[]>([]);
  // const [locations, setLocations] = useState<{ [key: string]: CharLocation }>({});
  const [showModal, setShowModal] = useState(false);

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

      <Modal
        open
        onClose={() => {
          console.log('a');
        }}>
        <CharDetailsModal />
      </Modal>
    </MainSection>
  );
};

export default App;
