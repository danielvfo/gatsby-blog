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
          <Card.Title>
            <div dangerouslySetInnerHTML={{ __html: props.title }}></div>
          </Card.Title>
          <Card.Text>
            <div dangerouslySetInnerHTML={{ __html: props.excerpt }}></div>
          </Card.Text>
          <Button variant="primary" href={props.readMore}>
            Read more...
          </Button>
        </Card.Body>
      </Card>
    </div>
  </article>
);

export default Post;
