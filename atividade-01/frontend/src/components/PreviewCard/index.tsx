import { CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { CardContainer, CardText } from "./styles";
//@ts-ignore
import numberAbreviate from "number-abbreviate";

export type Props = {
  total: number;
  canceled: number;
  confirmed?: number;
  year: number;
  selected?: boolean;
  executed?: number;
  onSelect: (year?: number) => void;
};

function PreviewCard(props: Props) {
  function handleClick() {
    if (props.onSelect) {
      props.onSelect(props.selected ? undefined : props.year);
    }
  }
  return (
    <CardContainer
      onClick={handleClick}
      variant={props.selected ? "outlined" : "elevation"}
      elevation={3}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            {/* <Typography variant="body2">2019</Typography> */}
            <CardText marginTop={10}>{props.year}</CardText>
          </Grid>
          <Grid item xs={8}>
            <Typography align="right" variant="h2" component="p" gutterBottom>
              {numberAbreviate(props.total, 0)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <CardText type="confirmed">Confirmados</CardText>
            <Typography variant="body2">
              {numberAbreviate(props.executed, 0)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardText type="canceled">Cancelados</CardText>
            <Typography variant="body2">
              {numberAbreviate(props.canceled, 0)}
            </Typography>
          </Grid>
        </Grid>
        {/* <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be nev o lent
        </Typography>
        <Typography color="textSecondary">adjective</Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions> */}
      {/* </CardActions> */}
    </CardContainer>
  );
}

export default PreviewCard;
