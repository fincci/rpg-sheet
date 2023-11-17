"use client";

import styled from "styled-components";
import { DiceIcon } from "./d20_icon";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <nav>
                <Menu>
                    <MenuItens>
                        <Link href="/home">
                            <DiceIcon width="35px" height="35px" />
                        </Link>
                    </MenuItens>
                    <MenuItens>
                        <Link href="/home">Home</Link>
                    </MenuItens>
                    <MenuItens>
                        <Link href="/home">Backstory</Link>
                    </MenuItens>
                    <MenuItens>
                        <Link href="/home">Story</Link>
                    </MenuItens>
                </Menu>
            </nav>
        </header>
    );
};

const Menu = styled.ul`
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: start;
    align-items: center;
    padding: 0 50px;
    gap: 50px;
`;

const MenuItens = styled.li`
    display: flex;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`;
