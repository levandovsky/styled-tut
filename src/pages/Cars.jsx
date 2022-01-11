import styled from "styled-components";
import {Input} from "../atoms/Inputs";

const Wrapper = styled.div`
    margin: 1rem;
`;

export const Cars = () => (
    <Wrapper>
        <Input />
        <Input />
    </Wrapper>
);
