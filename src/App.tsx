import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";
import { CharacterBasicInfo, CharactersResp, CharLocation } from "./types/character";
import { Box, Modal } from "@mui/material";

import CharDetailsModal from "./components/CharDetailsModal";
import { getLocation } from "./apis/getLocation";
import { LocationStateInterface } from "./types/location";
import InfiniteScroll from "./components/InfiniteScroll";

const MainSection = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

interface UrlsParameter {
    origin: string;
    location: string;
}

const locationDefault: LocationStateInterface = {
    isKnown: false,
    name: "",
    dimension: "",
    isLoaded: false
};

const App = () => {
    const [characters, setCharacters] = useState<CharacterBasicInfo[]>([]);
    // const [locations, setLocations] = useState<{ [key: string]: CharLocation }>({});
    const [showModal, setShowModal] = useState(false);
    // TODO: Use isLoaded state to show loader for each data
    const [origin, setOrigin] = useState(locationDefault);
    const [location, setLocation] = useState(locationDefault);
    const [nextPage, setNextPage] = useState<string>("");

    const getCharacters = async (nextPage?: string) => {
        const resp: CharactersResp = await axios.get(
            nextPage || "https://rickandmortyapi.com/api/character"
        );

        if (resp.status === 200 && resp.data) {
            const oldData = JSON.parse(JSON.stringify(characters));

            setCharacters([...oldData, ...resp.data.results]);
            // setCharacters(resp.data.results);
            setNextPage(resp.data.info.next);
        }
    };

    useEffect(() => {
        // First call to get characters
        getCharacters();
    }, []);

    const returnLocationData = async (loc: string): Promise<LocationStateInterface> => {
        let updatedLoc = { ...locationDefault };

        if (loc) {
            const resp = await getLocation(loc);

            if (resp.status === 200 && resp.data) {
                updatedLoc = {
                    ...updatedLoc,
                    name: resp.data.name,
                    dimension: resp.data.dimension,
                    id: resp.data.id,
                    residents: resp.data.residents.length,
                    isLoaded: true,
                    isKnown: true
                };
            }
        } else {
            updatedLoc.isKnown = false;
        }

        return updatedLoc;
    };

    const handleKnowMoreClick = async ({ origin, location }: UrlsParameter) => {
        const updatedLoc = await returnLocationData(origin);
        const updatedOrg = await returnLocationData(location);

        setShowModal(true);
        setOrigin(updatedOrg);
        setLocation(updatedLoc);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <MainSection className="App">
            <InfiniteScroll
                isObserving={nextPage ? true : false}
                handleInfiniteScroll={getCharacters}
                nextPage={nextPage}>
                {characters.map((val) => (
                    <CharacterCard handleClick={handleKnowMoreClick} key={val.id} basicInfo={val} />
                ))}
            </InfiniteScroll>

            <Modal open={showModal} onClose={handleModalClose}>
                <Box>
                    <CharDetailsModal origin={origin} location={location} />
                </Box>
            </Modal>
        </MainSection>
    );
};

export default App;
