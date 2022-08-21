import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { CharacterBasicInfo } from "../types/character";

interface CharacterCardProps {
    basicInfo: CharacterBasicInfo;
    handleClick: ({
        origin,
        location,
        episode
    }: {
        origin: string;
        location: string;
        episode: string[];
    }) => void;
}

const CharacterCardMain = styled(Card)`
    margin: 10px;
    width: calc(20% - 20px);

    @media (max-width: 900px) {
        width: calc(33.33% - 20px);
    }

    @media (max-width: 550px) {
        width: calc(50% - 20px);
    }

    @media (max-width: 450px) {
        width: 100%;
        margin: 10px 0;
    }
`;

const CardImg = styled(CardMedia)`
    height: 300px;
`;

const CardContentCustom = styled(CardContent)`
    padding-left: 5px;
`;

enum CharStatus {
    ALIVE = "Alive",
    DEAD = "Dead",
    UNKNOWN = "unknown"
}

const CharacterCard: FunctionComponent<CharacterCardProps> = ({ basicInfo, handleClick }) => {
    return (
        <CharacterCardMain>
            <CardImg image={basicInfo.image} />

            <CardContentCustom>
                <Typography textAlign="left" gutterBottom variant="h5" component="div">
                    {basicInfo.name}
                </Typography>

                <Typography
                    textAlign="left"
                    color="text.secondary"
                    gutterBottom
                    variant="subtitle2"
                    component="div">
                    {basicInfo.gender} | {basicInfo.species} |
                    <Typography
                        textAlign="left"
                        style={{
                            color: `${basicInfo.status === CharStatus.ALIVE ? "green" : ""} 
                            ${basicInfo.status === CharStatus.DEAD ? "red" : ""}
                            ${basicInfo.status === CharStatus.UNKNOWN ? "orange" : ""}
                            `
                        }}
                        gutterBottom
                        variant="subtitle2"
                        component="span">
                        {" "}
                        {basicInfo.status}
                    </Typography>
                </Typography>
            </CardContentCustom>

            <CardActions>
                <Button
                    onClick={() =>
                        handleClick({
                            origin: basicInfo.origin.url,
                            location: basicInfo.location.url,
                            episode: basicInfo.episode
                        })
                    }
                    size="small">
                    Learn More
                </Button>
            </CardActions>
        </CharacterCardMain>
    );
};

export default CharacterCard;
