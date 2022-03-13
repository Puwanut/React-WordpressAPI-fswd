import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const AuthorProfile = ({ author }) => {
    return (
        <Card style={{ width: '18rem', marginRight: "1vw", marginBottom: "1vh"}}>
            <Card.Img variant="top" src={author.avatar_urls[96]} />
            <Card.Body>
                <Card.Title className="text-center">{author.name}</Card.Title>
                <Button style={{ width: "100%"}}>
                    <Link to={`/${author.id}`} style={{color: "white"}}>See posts</Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default AuthorProfile