import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { LocationStateInterface } from "../types/location";

interface CharDetailsModalProps {
    origin: LocationStateInterface;
    location: LocationStateInterface;
}

const Main = styled.div`
    background: white;
    width: 500px;
    max-width: calc(100vw - 20px);
    margin: 0 10px;
    position: absolute;
    top: 50%;
    left: calc(50% - 10px);
    transform: translate(-50%, -50%);
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ModalTitle = styled(Typography)`
    margin-bottom: 20px;
`;

const Section = styled.div`
    width: 50%;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;
    min-width: 230px;
`;

const CharDetailsModal: FunctionComponent<CharDetailsModalProps> = ({ origin, location }) => {
    return (
        <Main>
            <Section key={"origin"}>
                <ModalTitle variant="h4" style={{ margin: "10px 0" }}>
                    Origin
                </ModalTitle>

                {origin.isKnown ? (
                    <>
                        <Typography variant="subtitle1" color="text.secondary" component="h5">
                            Name - {origin.name}
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="h5">
                            Dimension - {origin.dimension}
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="h5">
                            Residents - {origin?.residents || 0}
                        </Typography>
                    </>
                ) : (
                    "Unknown"
                )}
            </Section>

            <Section key={"origin"}>
                <ModalTitle variant="h4" style={{ margin: "10px 0" }}>
                    Location
                </ModalTitle>

                {location.isKnown ? (
                    <>
                        <Typography variant="subtitle1" color="text.secondary" component="h5">
                            Name - {location.name}
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="h5">
                            Dimension - {location.dimension}
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="h5">
                            Residents - {location?.residents || 0}
                        </Typography>
                    </>
                ) : (
                    "Unknown"
                )}
            </Section>
        </Main>
    );
};

export default CharDetailsModal;
