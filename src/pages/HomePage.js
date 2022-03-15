import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Banner from "../components/Banner"
import Post from "../components/Post"

const HomePage = () => {
    const [allPost, setAllPost] = useState([])

    const getAllPost = async () => {
        const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts?per_page=100`)
        setAllPost(response.data)
    }

    useEffect(() => {
        getAllPost()
    }, [])

    const Allpost = () => {
        if (allPost.length !== 0) {
            return (
                <Row>
                    <Col md={12} style={{ marginTop: 50 }}>
                        {
                            allPost.map((post) => (
                                <Post key={post.id} post={post} showContent="excerpt"/>
                            ))
                        }
                    </Col>
                </Row>
            )
        } else {
            return <></>
        }

    }

    return (
        <>
            <Banner text="Welcome" />
            <Container>
                <Allpost />
            </Container>
        </>

    )
}

export default HomePage