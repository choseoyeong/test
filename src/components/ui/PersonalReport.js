import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
//import {   } from "semantic-ui-react"
import Movie from "../Movie";
import StepLineChart from "../StepLineChart";
import MyLine from "../MyLine";
import Axios from "axios";
import MovieReport from "../MovieReport";
import MyPersonalLine from "../MyPersonalLine";
import { BASE_URL } from "../../constant";

const PersonalReport = (props) => {
  console.log(props);
  const { abc } = props.match;
  const { id, email } = props.match.params;
  const [movie, setMovie] = useState({});
  const [evaluations, setEvaluations] = useState([]);
  useEffect(() => {
    const fn = async () => {
      console.log(id);
      let res = await Axios.get(`${BASE_URL}/movie/${id}`);
      setMovie(res.data.movie);
      // res = await Axios.get(`${BASE_URL}/evaluation/email/${email}`, { id });
      res = await Axios.post(`${BASE_URL}/evaluation/personalReport`, {
        id,
        email,
      });
      console.log(res.data.evaluationList);
      setEvaluations(res.data.evaluationList);
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
                <StepLineChart data={evaluations} />
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
export default PersonalReport;
