import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    // maxWidth: 345,
  },
  media: {
    height: 250,
  },
}));
//import {   } from "@material-ui/core"
//import {   } from "semantic-ui-react"
const Movie = withRouter((props) => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const { imgUrl, title, comments, good, bad, view, id } = props;
  const onClick = (e) => {
    const email = auth.isLoggedIn ? auth.user.email : "btime906@gmail.com";
    e.preventDefault();
    props.history.push(`/report/${email}/${id}`);
    console.log(auth.user);
  };
  return (
    <Card className={classes.root} onClick={onClick} style={{ margin: 0 }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Views : {view}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Likes {good} | DisLikes {bad} | Comments {comments}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions> */}
    </Card>
  );
});
export default Movie;
