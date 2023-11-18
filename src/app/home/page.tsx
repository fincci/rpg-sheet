"use client";

import styled from "styled-components";
import { Header } from "../components/header";

export default function Home() {
    const characterName = "Baki Kageyama";
    const characterClass = "Barbaro";
    const characterBackground = "Lutador";
    const characterRace = "Human";
    const characterAlignment = "Neutral";
    const characterLevel = "1";

    return (
        <Page>
            <Header />
            <Sheet>
                <MainInfosWrapper>
                    <CharacterName>{characterName}</CharacterName>
                    <MainInfos>
                        <MainInfoItem>
                            <span>Class</span>
                            <span>{characterClass}</span>
                        </MainInfoItem>
                        <MainInfoItem>
                            <span>Background</span>
                            <span>{characterBackground}</span>
                        </MainInfoItem>
                        <MainInfoItem>
                            <span>Race</span>
                            <span>{characterRace}</span>
                        </MainInfoItem>
                        <MainInfoItem>
                            <span>Alignment</span>
                            <span>{characterAlignment}</span>
                        </MainInfoItem>
                        <MainInfoItem>
                            <div>
                                <span>XP</span>
                                <span>{characterLevel}</span>
                            </div>
                            <input placeholder="Just numbers" />
                        </MainInfoItem>
                    </MainInfos>
                </MainInfosWrapper>
            </Sheet>
        </Page>
    );
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #121212;
    color: #ffffffe6;
`;

const Sheet = styled.main`
    padding: 20px 50px;
`;

const MainInfosWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CharacterName = styled.h1`
    font-size: 2rem;
`;

const MainInfos = styled.div`
    display: flex;
    gap: 25px;
`;

const MainInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4d4d4d;
    padding: 10px;
    border-radius: 5px;
    width: 150px;
    span:first-child {
        font-size: 0.7rem;
        color: var(--text-color-secondary);
    }
    span:last-child {
        font-size: 1rem;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
`;
