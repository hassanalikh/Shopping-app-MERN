import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <span>
                                Copyrights &copy; reserved Romix Store
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer