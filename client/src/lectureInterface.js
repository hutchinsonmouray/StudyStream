import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import lectureI from './styles.css';
import {AppBar, Container, Grid, GridListTileBar, Grow, Menu, MenuItem, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {red} from "@material-ui/core/colors";
import {FaFilePdf} from "react-icons/fa";
import axios from "axios";

function deleteLecture() {
    //remove item from cpp stored file??
    <NavLink style={{ textDecoration: 'none' }} to={'./'}><button>go home</button> </NavLink>

    return null;
}
function getLectSummary() {
// gets the lect summary info from the db
//     <div className='tile-container'>

    return (<div className='lectureSummary'>This is the Lecture Summary </div>
    );
}
function getClassInteraction() {
// gets the class interaction from the db
    //        "Word '" << p.first << "' occurs " << p.second << " times.\n";
    let keywords = []
    for(let i = 0; i<10; i++) {
        let pfirst = "p.first"
        let psecond = "p.second"
        keywords.push(
            <div className='keywords'>Word: {pfirst} occurs {psecond} times.</div>
        )
    }
    return (
            <div className='keywords-box'>{keywords}</div>
    );
}

 // class LectInterface extends React.Component {
const LectInterface = () => {
   // render() {
       localStorage.getItem("getCurrentID").toString();


    const [posts, setPosts] = useState([]);
    const [creator,setCreator] = useState([]);
    const [summary,setSummary] = useState([]);


    let index = localStorage.getItem("getCurrentID").toString();
    useEffect(()=>{
        axios.get("/get-set/" + index)
            .then(res=>{
                    console.log(res)
                    setPosts(res.data.title)
                // setPosts(JSON.stringify(res.data.set.keys().toJSON()))
                setCreator(res.data.creator)
                setSummary.push(res.data.set)
                }
            )
        // .catch(console.log(onerror))
    })


    function downloadLectureasPDF() {
           return undefined;
       }

       return (
           <Container maxidth={"lg"}>
               {creator}
               {posts}
               <Grid>
                   {/*<p>About StudyStream</p>*/}
                   <button className='button-standard' onClick={downloadLectureasPDF()}>
                       <div className='make-grid'><p>Download PDF</p>
                           {/*<FaFilePdf></FaFilePdf>*/}
                       </div>
                   </button>
                   <NavLink className='right' style={{textDecoration: 'red'}} to={"/LearnSS"}>
                       <button className='button-standard' onClick={deleteLecture()}>
                           <p>Delete</p>
                       </button>
                   </NavLink>
               </Grid>

               {/*Header Bar*/}
               <NavLink to={"/"} style={{textDecoration: 'none'}} color='black'>
                   <AppBar align='center' className='navBar' position="static" color="inherit">
                       <Typography variant="h2" aligin="center">StudyStream</Typography>
                   </AppBar>
               </NavLink>

               {localStorage.getItem("getCurrentID").toString()}
               {/*add a border and make it look nice w/ typ*/}
               {/*<Typography className={classes.heading} variant="h5" aligin="center">h5 Set interface</Typography>*/}
               {/*<Typography className={classes.heading} variant="subtitle1" aligin="center"> subtitle1 Set interface</Typography>*/}
               {/*<Typography className={classes.heading} variant="body2" aligin="center">body2 Set interface</Typography>*/}

               <Grow in>
                   <Grid container justify="space-between" alignItems="stretch" flexDirection='row' spacing={3}>
                       <Grid item xs={12} sm={7}>
                       </Grid>
                   </Grid>
               </Grow>
               <div className='lectureI'>
                   <Typography className='box-with-blue-border' variant="h6">{posts}</Typography>
                   <Paper background-color='black'>
                       {getLectSummary()}
                   </Paper>
                   {/*Function: getClassInteraction*/}
                   <Typography align='center' className='set-tool-bar' variant="h6">Keywords</Typography>
                   <div className='classInteraction'>
                       <Container className="box-with-blue-border" position='relative'>
                           {getClassInteraction()}
                       </Container>
                   </div>
                   <div align='right'>
                       <Typography className='button-standard'>This set was created by {creator}</Typography>
                   </div>
               </div>
           </Container>
       );

}

export default LectInterface;