import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Banner from "../components/Banner"
import Post from "../components/Post"

const AuthorPostPage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState([])
    const [author, setAuthor] = useState([])

    const getPosts = async () => {
        const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts?author=${id}&per_page=100`)
        setPosts(response.data)
    }

    const getAuthor = async () => {
        const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${id}`)
        setAuthor(response.data)
    }

    useEffect(() => {
        getPosts()
        getAuthor()
    }, [])

    const AuthorPosts = () => {
        if (posts.length !== 0 && author.length !== 0) {
            return (
                <>
                    <Banner text={`${author.name}'s Posts`} />
                    <Container style={{ marginTop: 50 }}>
                        <Link to="/author">&lt;&lt; Back to Authors Page</Link>
                        <Card className="mt-3 mb-3 p-2">
                            <h3 style={{ textAlign: "center", margin: 0}}>{posts.length} Posts</h3>
                        </Card>
                        <Row className="mt-3">
                            <Col md={12} >
                                {
                                    posts.map((post) => (
                                        <Post key={post.id} post={post} showContent="excerpt" />
                                    ))
                                }
                            </Col>
                        </Row>
                    </Container>
                </>
            )

        } else {
            return <></>
        }
    }

    return (
        <AuthorPosts />
    )
}

export default AuthorPostPage