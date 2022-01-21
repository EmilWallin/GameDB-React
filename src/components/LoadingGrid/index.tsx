import React from "react";
import { Wrapper, Content } from "./LoadingGrid.styles";

//components
import { Card } from "../LoadingCard";

export const LoadingGrid = () => {
    return (
        <Wrapper>
            <Content>
                {    [...Array(8)].map((n, index) => (
                    (<Card key={index} delay={index/15 + "s"}></Card>)
                ))
                }
            </Content>
        </Wrapper>
    )
}