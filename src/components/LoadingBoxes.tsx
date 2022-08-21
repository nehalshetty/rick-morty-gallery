import { Skeleton } from "@mui/material";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface LoadingBoxesProps {
    count?: number;
}

const LoadingSkeleton = styled(Skeleton)`
    width: calc(20% - 20px);
    margin: 10px;
`;

const LoadingBoxes: FunctionComponent<LoadingBoxesProps> = ({ count = 16 }) => {
    return (
        <>
            {new Array(count).fill("").map((_, i) => (
                <LoadingSkeleton key={"ls" + i} variant="rectangular" height={446} />
            ))}
        </>
    );
};

export default LoadingBoxes;
