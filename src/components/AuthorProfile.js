import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const AuthorProfile = ({ author }) => {
    return (
        <Card style={{ width: '18rem', marginRight: "1vw", marginBottom: "1vh"}}>
            <Card.Img variant="top" src={author.avatar_urls[96]} />
            <Card.Body>
                <Card.Title className="text-center">{author.name}</Card.Title>
                <Link to={`/author/${author.id}`} style={{color: "white", textDecoration: "none"}}>
                    <Button style={{ width: "100%"}}>
                        Author's Posts
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default AuthorProfile