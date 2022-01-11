import styled from "styled-components";
import {Field} from "../molecules/Field";

const Wrapper = styled.div`
    margin: 1rem;
`;

export const Cars = () => (
    <Wrapper>
        <Field label="first input" />
        <Field label="second input" />
    </Wrapper>
);
