import React, { FunctionComponent, PropsWithChildren, useEffect, useRef } from "react";
import styled from "styled-components";

interface InfiniteScrollProps {
    isObserving: boolean;
    nextPage?: string;
    handleInfiniteScroll: (nextPage?: string) => void;
}

const ObservedElement = styled.div`
    height: 20px;
    width: 100%;
    margin-bottom: 5px;
`;

const InfiniteScroll: React.FC<PropsWithChildren<InfiniteScrollProps>> = ({
    children,
    isObserving,
    handleInfiniteScroll,
    nextPage
}) => {
    const loaderRef = useRef<HTMLDivElement>(null);

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];

        if (target.isIntersecting) {
            handleInfiniteScroll(nextPage);
        }
    };

    let observer: IntersectionObserver;

    useEffect(() => {
        if (isObserving && loaderRef.current) {
            const option = {
                threshold: [1]
            };
            observer = new IntersectionObserver(handleObserver, option);
            observer.observe(loaderRef.current);

            return () => {
                if (loaderRef.current) observer.unobserve(loaderRef.current);
            };
        }

        if (!isObserving && loaderRef.current && observer) {
            observer.unobserve(loaderRef.current);
        }

        console.log(nextPage);
    }, [handleObserver, isObserving, nextPage]);

    return (
        <>
            {children}
            <ObservedElement ref={loaderRef} />
        </>
    );
};

export default InfiniteScroll;
