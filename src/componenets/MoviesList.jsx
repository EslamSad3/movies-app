import React from 'react';
import CardMovies from './CardMovies';
import PaginationList from './PaginationList';
import { Row } from 'react-bootstrap';

function MoviesList({ movies, getPage, pagenumbers }) {
  return (
    <>
      <Row className="mt-3">
        {movies.length >= 1 ? (
          movies.map((movie) => {
            return <CardMovies key={movie.id} movie={movie} />;
          })
        ) : (
          <h2> لا يوجد افلام</h2>
        )}
        {movies.length >= 1 ? (
          <PaginationList getPage={getPage} pagenumbers={pagenumbers} />
        ) : null}
      </Row>
    </>
  );
}

export default MoviesList;
