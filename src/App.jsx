import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    margin: 1rem;
    background: papayawhip;
    padding: 1rem;
`;

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;


const RoundedButton = styled(Button)`
    border-radius: 100px;
`

function App() {
    return (
        <div className="App">
            <Wrapper>
                <Title>Hello World</Title>
                <div>
                    <Button primary>Primary</Button>
                </div>
                <div>
                    <Button>Not primary</Button>
                </div>
                <div>
                    <RoundedButton primary>Primary</RoundedButton>
                </div>
                <div>
                    <RoundedButton>Not primary</RoundedButton>
                </div>
            </Wrapper>
        </div>
    );
}

export default App;
