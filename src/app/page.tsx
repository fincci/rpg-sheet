"use client";

import Link from "next/link";
import styled from "styled-components";
import { AddSheetIcon } from "@/app/components/plus";

export default function Sheets() {
    return (
        <Main>
            <SheetContainer>
                <Sheet>
                    <Link href="/home">Sheet 1</Link>
                </Sheet>
                <AddSheet>
                    <AddSheetIcon width="35" height="35" />
                </AddSheet>
            </SheetContainer>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #121212;
    color: var(--text-color-secondary);
    justify-content: center;
    align-items: center;
`;

const SheetContainer = styled.div`
    display: flex;
	flex-direction: column;
    background-color: #4d4d4d;
	border-radius: 10px;
	width: 30%;
	justify-content: center;
	align-items: center;
`;

const Sheet = styled.div`
    display: flex;
`;

const AddSheet = styled.span`
    display: flex;
    cursor: pointer;
`;
