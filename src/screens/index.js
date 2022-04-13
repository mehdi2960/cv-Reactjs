import React,{useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import profileImage from "../assets/images/images.jpg";
import { getTranslate ,changeLanguage,lang} from "../localization/index";
import  HomeScrren from  './homeScreen';
import  AboutScrren from  './aboutScreen';
import  ResumeScrren from  './resumeScreen';
import  PortfolioScrren from  './portfoliesScreen';
import  ContactScrren from  './contactScreen';
import  './index.css';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    margin: theme.spacing(2),
    width:50,
    height:50,
    backgroundColor:theme.palette.primary.backgroundColor,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  topDrawer: {
    width: "100%",
    borderBottom: "1px solid #2e344e",
    textAlign: "center",
    padding: "20px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    maxWidth: "100%",
    borderRadius: "50%",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#191d2b",
    height: "100vh",
    borderRight: "1px solid #2e344e",
  },
  bottomDrawer: {
    padding: 20,
    borderTop: "1px solid #2e344e",
  },
  centerDrawer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const translate = getTranslate();
  const[page,setPage]=useState(0);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <img
          src={profileImage}
          alt={translate.name}
          className={classes.profileImage}
        />
      </div>
      <div className={classes.centerDrawer}>
        <List style={{width:"100%"}} >
          <ListItem className={page===0?null:"listItem"} style={{backgroundColor:page===0?"#037fff":"transparent",paddingLeft:0}} onClick={()=>{setPage(0);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography className="listitemText" style={{color:page===0?"#FFF":"#a4acc4"}} variant="body2">{translate.home}</Typography>
              }
            />
            <div className="overlay"/>
          </ListItem>
          <ListItem className="listItem" style={{backgroundColor:page===1?"#037fff":"transparent",paddingLeft:0}} onClick={()=>{setPage(1);setMobileOpen(false)}} button>
            <ListItemText 
              disableTypography={true}
              children={
                <Typography className="listitemText" style={{color:page===1?"#FFF":"#a4acc4"}} variant="body2">{translate.about}</Typography>
              }
            />
             <div className="overlay"/>
          </ListItem>
          <ListItem   className="listItem" style={{backgroundColor:page===2?"#037fff":"transparent",paddingLeft:0}} onClick={()=>{setPage(2);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography style={{color:page===2?"#FFF":"#a4acc4"}} variant="body2">{translate.resume}</Typography>
              }
            />
              <div className="overlay"/>
          </ListItem>
          <ListItem className="listItem" style={{backgroundColor:page===3?"#037fff":"transparent",paddingLeft:0}} onClick={()=>{setPage(3);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography  className="listitemText" style={{color:page===3?"#FFF":"#a4acc4"}} variant="body2">{translate.portfolios}</Typography>
              }
            />
             <div className="overlay"/>
          </ListItem>
          <ListItem  className="listItem" style={{backgroundColor:page===4?"#037fff":"transparent",paddingLeft:0}} onClick={()=>{setPage(4);setMobileOpen(true)}} button>
            <ListItemText 
              disableTypography={true}
              children={
                <Typography className="listitemText" style={{color:page===4?"#FFF":"#a4acc4"}} variant="body2">{translate.contact}</Typography>
              }
            />
             <div className="overlay"/>
          </ListItem>
        </List>
      </div>

      <div className={classes.bottomDrawer}>
        <Button color={lang==='fa'?'primary':'secondary'} onClick={()=>changeLanguage("fa")} color="primary">فارسی</Button>
        {"/"}
        <Button color={lang==='en'?'primary':'secondary'}  onClick={()=>changeLanguage("en")} color="primary">English</Button>
      </div>
    </>
  );

  const getPage=()=>{
    switch (page) {
      case 0:
          return <HomeScrren/>
      case 1:
          return <AboutScrren/>
      case 2:
          return <ResumeScrren/>
      case 3:
          return <PortfolioScrren/>
      case 4:
          return <ContactScrren/>
    }
  }
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            // anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
         {getPage}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
