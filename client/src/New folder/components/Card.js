import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});


export default function OutlinedCard() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    // const responce = await fetch('https://gorest.co.in/public/v2/users');
    // const data = await responce.json();

    const res = await fetch('/tutordata',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "category": "math"
      }),
    });

    const data = await res.json();

    setUsers(data);
    console.log(data);


  }

  useEffect(() => {
    getUsers();
  },[]);


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      {
        users.map((curElement) => {
          return(
            <>
            <Grid item xs ={5}  spacing={2} >
              <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {curElement.email}
                </Typography>
                <Typography variant="h5" component="h2">
                  {curElement.name}  {/* {bull}nev{bull}o{bull}lent */}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  subject: {curElement.category}
                  <br />
                  Teaching mode : {curElement.teaching_mood}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View profile</Button>
              </CardActions>
            </Card>

        </Grid>
            </>
          )

        })
      }

    </>
  );
}
