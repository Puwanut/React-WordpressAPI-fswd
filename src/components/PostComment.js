import axios from "axios"
import { Button, Card, Col, Image, Row } from "react-bootstrap"

const PostComment = ({ postID }) => {
    const sendComment = async () => {
        console.log("click post comment")
        let url = `https://fswd-wp.devnss.com/wp-json/wp/v2/comments`
        let data = {
            author_name: document.getElementById("authorName").value,
            content: document.getElementById("authorComment").value,
            post: postID
        }
        let header = {
            "Content-Type": "application/json",
            "Authorization": "Basic ZnN3ZDpmc3dkLWNtcw=="
        }

        document.getElementById("authorName").value = ""
        document.getElementById("authorComment").value = ""

        let response = await axios.post(url, data, {headers: header})
        window.location.reload()

    }

    return (
        <Card border="info" style={{ width: "100%", marginRight: "1vw", marginBottom: "1vh", padding: 10}}>
        <Card.Body>
            <Row>
                <Col xs={3} md={2}>
                    <Image fluid roundedCircle src="https://secure.gravatar.com/avatar/?s=96&d=mm&r=g" style={{float: "right"}}/>
                </Col>
                <Col xs={9} md={10}>

                        <Card.Title>
                            <label for="authorName">Name</label><br/>
                            <input type="text" id="authorName" style={{ maxWidth: "100%"}}></input>
                        </Card.Title>
                        <Card.Text>
                            <label for="authorComment">Comment</label><br />
                            <textarea id="authorComment" name="authorComment" rows="4" cols="100" style={{ maxWidth: "100%"}}></textarea>
                        </Card.Text>
                        <Button variant="outline-dark" onClick={sendComment}>Post comment</Button>
                </Col>
            </Row>
        </Card.Body>

        </Card>
    )
}

export default PostComment