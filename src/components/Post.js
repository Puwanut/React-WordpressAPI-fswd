import { Badge, Button, Card } from "react-bootstrap"
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from "react"
import Comment from "./Comment"
import PostComment from "./PostComment"

const Post = ({ post, showContent }) => {
  const [user, setUser] = useState([])
  const [category, setCategory] = useState([])
  const [comments, setComments] = useState([])

  const getUser = async () => {
      const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${post.author}`)
      setUser(response.data)
  }

  const getCategory = async () => {
      const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories`)
      setCategory(response.data)
  }

  const getComments = async () => {
    const response = await axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments?post=${post.id}&per_page=100`)
    setComments(response.data)
}

  useEffect(() => {
      getUser()
      getCategory()
      getComments()
  }, [])


    const CategoryBadge = ({ categoryId }) => {
      let categoryName
      category.forEach(element => {
        if (element.id === categoryId) {
          categoryName = element.name
        }
      });

      return (
        <span>
          <Link to={`/category#${categoryId}`}>
            <Badge pill bg="primary" style={{ marginRight: 5, fontSize: "0.8rem"}}>{categoryName}</Badge>
          </Link>
        </span>
      )
    }

    const PostBox = () => {
      if (post.length !== 0){
        if (showContent === "excerpt"){
          return (
          <Card border="secondary" style={{ marginBottom: 25, padding: 20 }}>
            <Card.Body>
              <Card.Title>{ post.title.rendered }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Published by <Link to={`/author/${post.author}`}>{ user.name }</Link> on { post.date.replace('T', ' ') }
              </Card.Subtitle>
              <Card.Text>
                { parser(post.excerpt.rendered) }
              </Card.Text>
              <Link to={`/post/${post.id}`}>
                <Button variant="warning">Continue Reading</Button>
              </Link>
            </Card.Body>
          </Card>
        )
        }
        else if (showContent === "content") {
          return (
            <>
              <Card border="secondary">
                  <Card.Body style={{ margin: "3vh 5vw"}}>
                      <Card.Title style={{ textAlign: "center", fontSize: "3em"}}>{ post.title.rendered }</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted text-center">
                          Published by <Link to={"/author/" + post.id}>{ user.name }</Link> on { post.date.replace('T', ' ') }
                      </Card.Subtitle>
                      <Card.Text className="mt-4">
                        { parser(post.content.rendered) }
                      </Card.Text>

                  </Card.Body>
                  <Card.Footer>
                      Category: &nbsp;
                      {(post.categories).map((id) => {
                          return (
                            <CategoryBadge categoryId={id} />
                          )
                      })}
                  </Card.Footer>
              </Card>

              <Card className="mt-3 mb-3 p-2">
                <h3 style={{ textAlign: "center", margin: 0}}>{comments.length} Comments</h3>
              </Card>

              <PostComment postID={post.id}/>

              {
                comments.map((comment) => (
                  <Comment key={comment.id} comment={comment}/>
                ))
              }

            </>
          )
        }

      } else {
        return <></>
      }
    }

    return (
        <PostBox />
    )
}
export default Post