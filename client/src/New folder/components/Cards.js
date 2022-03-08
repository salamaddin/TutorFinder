import OutlinedCard from "./Card";
import { Grid } from "@material-ui/core";
export default function Cards() {
  return (
    <Grid container spacing={2} >
        <Grid item xs ={12} sm = {6} md = {4}>
           <OutlinedCard/>
        </Grid>
        
        <Grid item xs ={12} sm = {6} md = {4}>
           <OutlinedCard/>
        </Grid>
        <Grid item xs ={12} sm = {6} md = {4}>
           <OutlinedCard/>
        </Grid>
        <Grid item xs ={12} sm = {6} md = {4}>
           <OutlinedCard/>
        </Grid>
        <Grid item xs ={12} sm = {6} md = {4}>
           <OutlinedCard/>
        </Grid>
        <Grid item xs ={12} sm = {6} md = {4}>
           <OutlinedCard/>
        </Grid>
        <Grid item xs ={12} sm = {6} md = {4}>
           <OutlinedCard/>
        </Grid>
    </Grid >
  );
}
