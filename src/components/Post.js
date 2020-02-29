import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = props => (
  <div className="p-3">
    <Card>
      <Card.Img
        variant="top"
        src="https://avatars3.githubusercontent.com/u/12551863?s=400&v=4"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.excerpt}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post
