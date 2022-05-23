import {render} from '@testing-library/react';
import Movie from './Movie'

it("check if button movie name is loaded", ()=>{
  const ui = render(<Movie />);
  const movie_name_btn = ui.getByTestId("movie-sort-btn");
  expect(movie_name_btn).toBeTruthy();
})