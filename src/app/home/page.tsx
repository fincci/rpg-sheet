"use client";

import styled from "styled-components";
import { Header } from "../components/header";

export default function Home() {
    const characterName = "Baki Kageyama";

    return (
        <>
            <Header></Header>
            <Sheet>
                <CharacterName>{characterName}</CharacterName>
            </Sheet>
        </>
    );
}

const Sheet = styled.main`
    display: flex;
    padding: 50px;
`;

const CharacterName = styled.h1`
    font-size: 2rem;
`
