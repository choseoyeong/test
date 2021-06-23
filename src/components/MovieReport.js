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
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    borderRadius: 0,
  },
  media: {
    height: 250,
  },
}));
//import {   } from "@material-ui/core"
//import {   } from "semantic-ui-react"
const MovieReport = withRouter((props) => {
  const classes = useStyles();
  const { imgUrl, title, comments, good, bad, view, id, email } = props;
  const onClick = (e) => {
    e.preventDefault();
    props.history.push(`/report/${email}/${id}`);
  };
  return (
    <>
      <Card className={classes.root} onClick={onClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgUrl}
            title="Contemplative Reptile"
          />
          <CardContent style={{ borderRadius: 0 }}>
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
    </>
  );
});
export default MovieReport;
