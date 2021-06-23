import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
//import {   } from "semantic-ui-react"
import Movie from "../Movie";
import StepLineChartProvider from "../StepLineCharProvider";
import MyLine from "../MyLine";
import Axios from "axios";
import MovieReport from "../MovieReport";
import MyPersonalLine from "../MyPersonalLine";
import { BASE_URL } from "../../constant";

const ProviderReport = (props) => {
  console.log(props);
  const movie_url = props.location.search.substr(5);
  const { id, email } = props.match.params;
  const [movie, setMovie] = useState({});
  const [evaluations, setEvaluations] = useState([]);
  console.log(movie_url);
  useEffect(() => {
    const fn = async () => {
      try {
        let res = await Axios.post(`${BASE_URL}/movie/url`, { url: movie_url });
        setMovie(res.data.movie);
        res = await Axios.post(`${BASE_URL}/evaluation/movie`, {
          url: movie_url,
        });
        setEvaluations(res.data.allEvaluations);
        console.log("all elva", res.data.allEvaluations);
      } catch (err) {
        console.log(err);
      }
    };

    fn();
  }, []);
  return (
    <Grid container>
      {movie && (
        <>
          <Grid item xs={12}>
            <MovieReport
              email={email}
              imgUrl={movie.thumbnail}
              title={movie.title}
              comments={movie.comments}
              good={movie.good}
              bad={movie.bad}
              view={movie.view}
              id={movie._id}
            />
          </Grid>
          {evaluations && evaluations.length > 0 && (
            <>
              <Grid item xs={12}>
                {/* <Typography variant="h4">This part is Graph</Typography> */}
                <StepLineChartProvider data={evaluations} />
              </Grid>
              <Grid item xs={12}>
                <MyPersonalLine data={evaluations} />
              </Grid>
            </>
          )}
        </>
      )}
    </Grid>
  );
};
export default ProviderReport;
