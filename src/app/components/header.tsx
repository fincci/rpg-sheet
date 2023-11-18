"use client";

import styled from "styled-components";
import { DiceIcon } from "./d20_icon";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <nav>
                <Menu>
                    <MenuIten>
                        <Link href="/home">
                            <DiceIcon width="35px" height="35px" />
                        </Link>
                    </MenuIten>
                    <MenuIten>
                        <Link href="/home">Home</Link>
                    </MenuIten>
                    <MenuIten>
                        <Link href="/home">Backstory</Link>
                    </MenuIten>
                    <MenuIten>
                        <Link href="/home">Story</Link>
                    </MenuIten>
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

const MenuIten = styled.li`
    display: flex;
    cursor: pointer;
    transition: 0.2s;
    color: var(--text-color);
    a:hover {
        transform: scale(1.1);
    }
    a:visited {
        color: var(--text-color);
    }
`;
