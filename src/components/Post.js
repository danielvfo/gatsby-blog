import React from 'react';
import { Card, Button } from 'react-bootstrap';
import innertext from 'innertext';

const Post = props => (
  <article>
    <div className="p-3">
      <Card>
        <Card.Img
          variant="top"
          src={props.image}
          alt={props.alt || innertext(props.title)}
        />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          <Button variant="primary" href={props.readMore}>
            Read more...
          </Button>
        </Card.Body>
      </Card>
    </div>
  </article>
);

export default Post;
