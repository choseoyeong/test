import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@material-ui/core";
import StepLineChart from "../StepLineChart";
import MyLine from "../MyLine";
import Movie from "../Movie";
import MovieReport from "../MovieReport";
import { BASE_URL } from "../../constant";
export const Report = (props) => {
  const { email } = props.match.params;
  const [evaluations, setEvaluations] = useState([]);
  useEffect(() => {
    // frontURL/report/nano.rlsh@gmail.com
    const fn = async () => {
      const res = await axios.get(`${BASE_URL}/evaluation/email/${email}`);
      console.log(res.data);
      setEvaluations(res.data.movies);
    };
    fn();
  }, []);
  return (
    <div>
      <Grid container>
        {evaluations && evaluations.length === 0 ? (
          <Paper>
            <Typography>시청기록이 존재하지 않습니다</Typography>
          </Paper>
        ) : (
          ""
        )}
        {evaluations &&
          evaluations.map((movie) => (
            <Grid item xs={12} style={{ margin: 0 }}>
              <MovieReport
                imgUrl={movie.thumbnail}
                title={movie.title}
                comments={movie.comments}
                good={movie.good}
                bad={movie.bad}
                view={movie.view}
                id={movie._id}
                email={email}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
