import React, { useEffect, useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { blue } from "@material-ui/core/colors"
import useWindowDimensions from "common/helpers/dimensions"
import constants from "common/helpers/constants"
import Placeholder from "common/components/Placeholder"

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    padding: theme.spacing(1),
  },
  gridItem: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    fontSize: 16,
    color: "#092B2F",
  },
  expand: {
    fontSize: 14,
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[800],
  },
  card: {
    width: "75%",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  siteLogo: {
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      width: 320,
      margin: "0 auto",
    },
  },
  imgBg: {
    backgroundColor: "#01c3cc",
  },
}))

export default function Dashboard() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const windowDimensions = useWindowDimensions()
  const isDesktop = windowDimensions.width > 768

  const knowMoreText = `${constants.BRAND_NAME} is an excellent and proud platform designed by
  strongly passionate Computer Science alumni of Delhi
  Technological University, Delhi, India to bridge the gap
  between new comers in Computer Science and those who are
  masters of the field by acting as a solution that helps both
  in learning and teaching related concepts. It is an effort in
  the direction of improving fundamentals of those who want to
  pursue Computer Science or who use it on a daily basis in
  their life. Primarily for Programming Professionals,
  Professors and Students from various institutions across the
  globe.`

  const [siteLogoSrc, setSiteLogoSrc] = useState("")

  useEffect(() => {
    const loadBrandLogo = async () => {
      const logoSrc = await import(`common/assets/AlgoLens.jpg`).then(
        (module) => module.default
      )
      setSiteLogoSrc(logoSrc)
    }
    loadBrandLogo()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label={constants.BRAND_NAME}
                  className={classes.avatar}
                >
                  AL
                </Avatar>
              }
              title={"Meet The Platform"}
              titleTypographyProps={{
                variant: "h5",
                color: "primary",
              }}
              subheader="Initiative since Nov 2019"
              subheaderTypographyProps={{
                variant: "subtitle1",
                color: "secondary",
              }}
            />
            <div className={classes.imgBg}>
              {siteLogoSrc ? (
                <CardMedia
                  src={siteLogoSrc}
                  title={constants.BRAND_NAME}
                  component="img"
                  classes={{
                    img: classes.siteLogo,
                  }}
                  loading="eager"
                  alt={constants.BRAND_NAME}
                  width="320"
                  height="320"
                />
              ) : (
                <Placeholder variant="rect" height={320} width={"100%"} />
              )}
            </div>
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                {constants.BRAND_NAME} stands for Computer Science
                Visualizations
              </Typography>
              {isDesktop && (
                <Paper elevation={2} className={classes.paper}>
                  <Typography variant="subtitle1">{knowMoreText}</Typography>
                </Paper>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
