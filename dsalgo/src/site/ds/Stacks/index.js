
import React, { useState } from "react";
import Element from "../../../ui/Element";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Push from './Push.js'
import Pop from './Pop.js'
import Get from './Get.js'

export default function Stack(props) {

  let [array, setArray] = useState([]);
  let [highlights, setHighlights] = useState(null);
  let [where, setWhere] = useState('Top');
  let [result, setResult] = useState(null);

  let push = (data) => {
    if (data) {
      let arr = array;
      arr.splice(0, 0, data);
      setArray(arr);
      setHighlights([0]);
      setResult(null);
    } else {
      alert("Nothing to Push");
    }
  }

  let pop = () => {
    let arr = array;
    arr.splice(0, 1);
    setArray(arr);
    setHighlights([]);
    setResult(null);
  }

  let get = () => {
    let arr = array;
  
    switch (where.toLowerCase()) {
      case "top":
        setHighlights([0]);
        setResult(arr[0]);
        return;
      case "bottom":
        setHighlights([arr.length - 1]);
        setResult(arr[arr.length - 1]);
        return;
      default:
    }
  }


  return (
    <Grid cintainer justify="center" className="p-5">
      <Grid container justify="center" alignItems="center" spacing={10}  >

        <Grid item xs={12} sm={8} md={2}>
          <Push
            push={(data) => {
              push(data);
            }}
          />
        </Grid>


        <Grid item xs={12} sm={8} md={3} >
          <Pop
            pop={() => {
              pop();
            }}

          />
        </Grid>


        <Grid item xs={12} sm={8} md={3}>
          <Get
            modifywhere={(position) => {
              setWhere(position)
            }}
            result1={result}
            array1={array}
            get={() => {
              get();
            }}
          />
        </Grid>



      </Grid>

      <Grid container justify="center" className="p-5" alignItems="center" >
        <Grid item className="offset-0" xs={12} sm={12} md={10} >
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{
              border: "1px solid black",
              borderTop: "none"
            }}
            className="col-sm-12"
          >
            {array.map((value, index) => {
              let highlight = false;
              if (highlights.includes(index)) {
                highlight = true;
              }
              return (
                <Element
                  highlight={highlight}
                  key={value + "-" + index}
                  data={{ value, index }}
                  type="stack"
                />
              );
            })}
          </Box>
          <Box textAlign="center" className="col-sm-12">
            Stack Container
          </Box>

        </Grid>

      </Grid>
    </Grid>
  );
}




























