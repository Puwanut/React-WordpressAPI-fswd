import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Post from "../components/Post"

const PostPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])

    const getPost = async () => {
        console.log(id)
        const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${id}`)
        setPost(response.data)
    }

    useEffect(() => {
        getPost()
    }, [])

    const PostContent = () => {
        if (post.length !== 0) {
            return (
                <>
                    <Container style={{ marginTop: 100 }}>
                        <Row>
                            <Col md={12}>
                                <Post key={post.id} post={post} showContent="content"/>
                            </Col>
                        </Row>

                    </Container>
                </>
            )
        } else {
            return <></>
        }
    }
    return <PostContent />
}

export default PostPage