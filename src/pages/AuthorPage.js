import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import AuthorProfile from "../components/AuthorProfile"
import Banner from "../components/Banner"

const AuthorPage = () => {
    const [authors, setAuthors] = useState([])

    const getAuthors = async () => {
        const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/users`)
        setAuthors(response.data)
    }

    useEffect(() => {
        getAuthors()
    }, [])

    const ShowAuthors = () => {
        if (authors.length !== 0){
            return (
                <>
                    <Banner text="Author" />
                    <Container style={{ marginTop: 50 }}>
                        <Row className="justify-content-center">
                            {
                                authors.map((author) => (
                                    <AuthorProfile key={author.id} author={author}/>
                                ))
                            }
                        </Row>

                    </Container>
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <ShowAuthors />
    )
}

export default AuthorPage