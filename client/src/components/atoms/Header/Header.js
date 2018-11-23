import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    border-bottom: 1px rgba(0,0,0,.2) solid;
`;

export default class Header extends React.PureComponent {
    render() {
        const {...props} = this.props;
        return (
            <Container {...props}>
                <h1>Hi</h1>
            </Container>
        )
    }
}