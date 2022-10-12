import Person from "@mui/icons-material/Person";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { FlexBetween, FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import TableRow from "components/TableRow";
import { H3, H5,H1, Small } from "components/Typography";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { format } from "date-fns";
import Link from "next/link";
import Image from "components/BazarImage";
import BazarIconButton from "components/BazarIconButton";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import LinkIcon from '@mui/icons-material/Link';

let theme = createTheme();

theme = responsiveFontSizes(theme)


const Profile = () => {
  
  return (
    <Box m={8}>
      <H5 my="10px">Umurava</H5>
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Umurava Propels environmental business solutions forward with second impact accelerotar class</Typography>
      </ThemeProvider>

      <Typography mt="10px" color={"primary"} variant="subtitle1">August 25,2022 | 2 min read</Typography>
      <Card
              sx={{
                marginTop: 2,
                display: "flex",
                alignItems: "center",
                background: "none",
                boxShadow: "none"
              }}
            >
              <Avatar src="/assets/images/faces/ralph.png" sx={{ height: 64, width: 64 }} />

              <Box ml={1.5} flex="1 1 0">
                <FlexBetween flexWrap="wrap">
                  <div>
                    <H5 my="0px">Ralph Edwards</H5>
                    <FlexBox alignItems="center">
                      <Typography color="grey.600">Software engineer</Typography>
                    </FlexBox>
                  </div>

                  <FlexBox className="flex">
                    <Button variant="text" startIcon={<ShareIcon />}>
                      Share via
                    </Button>
                    <IconButton aria-label="delete">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <MailIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <LinkIcon />
                    </IconButton>
                  </FlexBox>
                </FlexBetween>
              </Box>
            </Card>
      <Grid md={3} xs={12} py={3}>
            
            <Card sx={{ marginTop: 4 }}>
              <CardMedia
                component="img"
                height="400"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
                alt="green iguana"
              />
            </Card>
            <Typography variant="body2" mt={2} align="center" fontSize={13} fontStyle={"italic"}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            <Typography variant="body2" mx={8} mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Morbi porta mauris vitae ante molestie, quis ullamcorper erat bibendum. 
              Curabitur sollicitudin sed lorem a sodales. Vestibulum ante ipsum primis 
              in faucibus orci luctus et ultrices posuere cubilia curae; Cras ornare 
              vestibulum lectus nec vulputate. Maecenas pellentesque massa enim, 
              eget pharetra erat dapibus in. Cras consequat vel erat et varius.
            </Typography>

            <Typography variant="body2" mx={8} mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta mauris 
              vitae ante molestie, quis ullamcorper erat bibendum. Curabitur sollicitudin 
              sed lorem a sodales. Vestibulum ante ipsum primis in faucibus orci luctus et 
              ultrices posuere cubilia curae; Cras ornare vestibulum lectus nec vulputate. 
              Maecenas pellentesque massa enim, eget pharetra erat dapibus in. Cras consequat 
              vel erat et varius. Duis quis lacinia erat, ut tincidunt turpis. Aenean vitae 
              scelerisque lacus, quis iaculis ligula. Nulla pretium magna lobortis ex viverra, 
              eget bibendum magna consequat. Aenean condimentum tellus sit amet hendrerit efficitur. 
              Cras commodo risus sit amet eros pretium sollicitudin. Donec nunc nulla, porttitor 
              facilisis quam ac, interdum congue diam.
            </Typography>
      </Grid>
            
      <Grid md={3} xs={12} py={3}>
            
            <Card sx={{ marginTop: 4 }}>
              <CardMedia
                component="img"
                height="400"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
                alt="green iguana"
              />
            </Card>
            <Typography variant="body2" mt={2} align="center" fontSize={13} fontStyle={"italic"}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            <Typography variant="body2" mx={8} mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Morbi porta mauris vitae ante molestie, quis ullamcorper erat bibendum. 
              Curabitur sollicitudin sed lorem a sodales. Vestibulum ante ipsum primis 
              in faucibus orci luctus et ultrices posuere cubilia curae; Cras ornare 
              vestibulum lectus nec vulputate. Maecenas pellentesque massa enim, 
              eget pharetra erat dapibus in. Cras consequat vel erat et varius.
            </Typography>

            <Typography variant="body2" mx={8} mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta mauris 
              vitae ante molestie, quis ullamcorper erat bibendum. Curabitur sollicitudin 
              sed lorem a sodales. Vestibulum ante ipsum primis in faucibus orci luctus et 
              ultrices posuere cubilia curae; Cras ornare vestibulum lectus nec vulputate. 
              Maecenas pellentesque massa enim, eget pharetra erat dapibus in. Cras consequat 
              vel erat et varius. Duis quis lacinia erat, ut tincidunt turpis. Aenean vitae 
              scelerisque lacus, quis iaculis ligula. Nulla pretium magna lobortis ex viverra, 
              eget bibendum magna consequat. Aenean condimentum tellus sit amet hendrerit efficitur. 
              Cras commodo risus sit amet eros pretium sollicitudin. Donec nunc nulla, porttitor 
              facilisis quam ac, interdum congue diam.
            </Typography>
      </Grid>
      
    </Box>

    
    
  );
};

const infoList = [
  { title: "16", subtitle: "All Orders" },
  { title: "02", subtitle: "Awaiting Payments" },
  { title: "00", subtitle: "Awaiting Shipment" },
  { title: "01", subtitle: "Awaiting Delivery" },
];


export default Profile;
