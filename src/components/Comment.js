import { Card, Col, Image, Row } from "react-bootstrap"
import parser from 'html-react-parser'

const Comment = ({ comment }) => {

    return (
        <Card style={{ width: "100%", marginRight: "1vw", marginBottom: "1vh", padding: 10}}>
            <Card.Body>
                <Row>
                    <Col xs={3} md={2}>
                        <Image fluid roundedCircle src={comment.author_avatar_urls[96]} style={{float: "right"}}/>
                    </Col>
                    <Col xs={9} md={10}>
                        <Card.Title>{comment.author_name}</Card.Title>
                        <Card.Text>
                            {
                                parser(comment.content.rendered)
                            }
                            <hr/>
                            <p className="text-muted m-auto">{comment.date.replace("T", " ")}</p>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Comment