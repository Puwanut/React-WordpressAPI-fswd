import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap"
import Banner from "../components/Banner"
import { useLocation } from "react-router-dom";
import Post from "../components/Post";

const CategoryPage = () => {
    const [allCategory, setAllCategory] = useState([])
    const [allPost, setAllPost] = useState([])

    const { hash } = useLocation();
    console.log(hash)

    const getAllCategory = async () => {
        const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories`)
        setAllCategory(response.data)
        console.log(response.data)
    }

    const getAllPost = async () => {
        const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/`)
        setAllPost(response.data)
        console.log(response.data)
    }

    // const getPostInCategory = async (cate_id) => {
    //     let response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts?categories=${cate_id}`)
    //     console.log(response.data)
    //     return response.data
    // }

    useEffect(() => {
        getAllCategory()
        getAllPost()
    }, [])

    const defaultTab = (hash) => {
        if (hash.length !== 0){
            return hash
        } else {
            return `#${allCategory[0].id}`
        }
    }

    const Categories = () => {
        if (allCategory.length !== 0) {
            return (
                <>
                    <Banner text="Category" />
                    <Container style={{ marginTop: 25 }}>
                        <Tab.Container id="list-group-tabs-category" activeKey={defaultTab(hash)}>
                            <Row>
                                <Col md={3} style={{ marginTop: 25 }}>
                                    <ListGroup>
                                        {
                                            allCategory.map((cate) => {
                                                return (
                                                    <ListGroup.Item action href={`#${cate.id}`} variant="light" key={cate.id}>
                                                        {cate.name}
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                                <Col md={9} style={{ marginTop: 25 }}>
                                <Tab.Content>
                                        {
                                            allCategory.map((cate) => {
                                                return (
                                                    <Tab.Pane eventKey={`#${cate.id}`} key={cate.id}>
                                                        {
                                                            allPost.filter(post => post.categories.includes(cate.id)).map((post) => (
                                                                <Post key={post.id} post={post} showContent="excerpt"/>
                                                            ))
                                                        }
                                                    </Tab.Pane>
                                                )
                                            })
                                        }
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <Categories />
    )
}

export default CategoryPage