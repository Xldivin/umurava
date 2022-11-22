import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { styled, Theme } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import Header from "./Header1";
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import AfricaMap from "../../assets/images/AfricaMap.svg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sd: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

const LandingWrapper = styled(Box)(({ theme }) => ({
    "& .link": {
        color: theme.palette.primary.main,
        cursor: "pointer",
        // backgroundColor: "#2B71F0",
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.primary.dark,
        },
       
    },
}));

const Landing = () => {
    return (
        <LandingWrapper
            sx={{
                backgroundColor: "#2B71F0",
                height: { xs: "160vh", sm: "120vh", md: "100vh", lg: "90vh" },
                overflowY: "hidden"
            }}
        >
            <Header />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: { xs: "60vh", sm: "60vh", md: "100vh", lg: "100vh" },
                }}
            >
                <Box
                    sx={{
                        display: { md: "flex" },
                        flexDirection: { md: "row", xs: "column", sm: "column" },
                        width: "100%",
                        height: { md: "80%", xs: "100%", sm: "100vh" },
                        // backgroundColor: "yellow",
                        top: 30,
                        left: 0
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: {xs:"center",sd:"center",sm:"center",md:"flex-start"},
                            width: "100%",
                            height: "100%",
                            // backgroundColor: "red",
                            // left: { md: 100, xs: 80, sm: 80 }
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    position:"relative",
                                    top:{xs:15,sm:15,md:10},
                                    color: "#fff",
                                    fontWeight: 500,
                                    fontSize: { xs: 24, sm: 24, md: 20, lg: 20 },
                                    textAlign: "center",
                                    lineHeight: 1,
                                    bottom: 5,
                                    marginTop: { xs: 15, sm: 25, md: 0, lg: 8 },
                                    fontFamily: "Work Sans",
                                }}
                            >
                                Umurava 1.0 coming soon
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems:"flex-start",
                                width: "80%",
                                marginTop: { xs: 4, sm: 5, md: 4, lg: 4 },
                                // backgroundColor: "green",
                                ml:{xs:5,sm:18,md:0}
                            }}
                        >
                            <Typography
                                variant={"h3"}
                                sx={{
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: { xs: 32, sm: 36, md: 36, lg: 24 },
                                    width:"88%",
                                    lineHeight: 1.2,
                                    FontFamily: "Work Sans",
                                }}
                            >
                                A Customized Talent Marketplace and

                            </Typography>
                            <Typography
                                variant={"h3"}
                                sx={{
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: { xs: 32, sm: 36, md: 36, lg: 24 },
                                    lineHeight: 1.2,
                                    FontFamily: "Work Sans",
                                }}
                            >
                                End-to-End Workforce Outsourcing Platform,

                            </Typography>
                            <Typography
                                variant={"h3"}
                                sx={{
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: { xs: 32, sm: 36, md: 36, lg: 24 },
                                    lineHeight: 1.2,
                                    FontFamily: "Work Sans",
                                }}
                            >
                                powered by AI.
                            </Typography>
                            
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: { xs: "70%", sm: "60%", md: "100%", lg: "100%" },
                                // backgroundColor: "green",
                                marginTop: { xs: 4, sm: 6, md: 4, lg: 4 },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 500,
                                    fontSize: { xs: 20, sm: 22, md: 20, lg: 20 },
                                    lineHeight: 1.2,
                                    fontFamily: "Work Sans",
                                    bottom: 5
                                }}
                            >
                                We match companies & organizations with Africa’s Quality Talents & Teams
                                specialized in technology, creative & media, business, research & data, and transcription & translations for both short-term and long-term job opportunities.

                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: { xs: 20, sm: 22, md: 20, lg: 20 },
                                    fontFamily: "Work Sans",
                                    mt: { xs: 4, sm: 4, md: 4, lg: 8 }
                                }}
                            >
                                Trained and Vetted Talents & Teams for you.
                            </Typography>

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                width: "80%",
                                height: "100%",
                                marginTop: { xs: 6, sm: 6, md: 4, lg: 0 },
                            }}
                        >
                            <Button
                                sx={{
                                    backgroundColor: "#1CBF73",
                                    color: "#fff",
                                    lineHeight: 1.2,
                                    bottom: {xs:5,sd:-20,sm:20,md:-20,lg:-35},
                                    width: 220,
                                    height: 50,
                                    borderRadius: 10,
                                    "&:hover": {
                                        backgroundColor: "#1CDF73",
                                    },
                                }}
                            >
                                <Link href={"/"}>
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff",
                                            fontStyle: "normal",
                                            textTransform: "none",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: "Work Sans",
                                                fontWeight: 500,
                                                fontSize: { xs: 16, sm: 16, md: 18, lg: 18 },
                                            }}
                                        >
                                            Find Quality Talents
                                        </Typography>
                                    </a>
                                </Link>
                            </Button>


                            <Button
                                variant={"outlined"}
                                sx={{
                                    color: "#fff",
                                    borderRadius: 10,
                                    borderColor: "#fff",
                                    lineHeight: 1.2,
                                    bottom: {xs:5,sd:-20,sm:20,md:-20,lg:-35},
                                    width: 220,
                                    marginLeft: { xs: 1, sm: 2, md: 6, lg: 6 },
                                    // FontFamily: "Work Sans",
                                    height: 50,
                                    "&:hover": {
                                        backgroundColor: "#1c91df",
                                    },
                                }}
                            >
                                <Link href={"/"}>
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff",
                                            fontStyle: "normal",
                                            textTransform: "none",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: "Work Sans",
                                                fontWeight: 500,
                                                fontSize: { xs: 16, sm: 16, md: 18, lg: 18 },
                                            }}
                                        >
                                            Apply as a Talent
                                        </Typography>
                                    </a>
                                </Link>
                            </Button>

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                // width: "100%",
                                height: { xs: "100%", sm: "100%", md: 0, lg: 0 },
                                marginTop: { xs: 1, sm: 1, md: 1, lg: 1 },
                            }}
                        >
                            {/* <Box
                                sx={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor: "#fff",
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: 40,
                                    height: 15,
                                    backgroundColor: "#1CBF73",
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    color: "#fff",
                                    marginTop: { xs: -0.3, sm: -0.3, md: -0.7, lg: -0.7 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontWeight: 500,
                                        fontSize: { xs: 16, sm: 16, md: 20, lg: 20 },
                                        lineHeight: 1.2,
                                        marginLeft: 2,
                                        fontFamily: "Work Sans",
                                    }}
                                >
                                    Book a Demo
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    color: "#fff",
                                    marginTop: { xs: -0.4, sm: -0.4, md: -1.2, lg: -1.2 },
                                }}
                            >
                                <ArrowRightAltIcon
                                    sx={{
                                        color: "#fff",
                                        fontSize: { xs: 24, sm: 24, md: 36, lg: 36 },
                                        lineHeight: 1.2,
                                        marginLeft: 1
                                    }}
                                />
                            </Box> */}

                            <Button
                                variant={"outlined"}
                                sx={{
                                    color: "#fff",
                                    borderRadius: 2,
                                    borderColor: "#fff",
                                    lineHeight: 1.2,
                                    bottom: {xs:-25,sd:-65,sm:5,md:-25,lg:-25},
                                    left: { xs: 1, sm: 2, md: 250, lg: 250 },
                                    width: 220,
                                    marginLeft: { xs: -2,sd:1, sm: 8, md: 6, lg: 40 },
                                    // FontFamily: "Work Sans",
                                    height: 50,
                                    "&:hover": {
                                        backgroundColor: "#1c91df",
                                    },
                                }}
                            >
                                <Link href={"/"}>
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff",
                                            fontStyle: "normal",
                                            textTransform: "none",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: "Work Sans",
                                                fontWeight: 500,
                                                fontSize: { xs: 16, sm: 16, md: 18, lg: 18 },
                                            }}
                                        >
                                            Send Us An Email
                                        </Typography>
                                    </a>
                                </Link>
                            </Button>


                        </Box>
                    </Box>

                    <Box sx={{width: "90%",height: "100%",mt:2}}
                    >
                        <ImageListItem
                            sx={{
                                display: { xs: "none", sm: "none", md: "flex" },
                                alignItems: "center",
                                justifyContent: "center",
                                width: { xs: "100%", md: "70%", lg: "80%", xl: "80%" },
                                height: { xs: "100%", md: "70%", lg: "80%", xl: "80%" }
                            }}
                        >
                            <Image
                                src={AfricaMap}
                            />
                        </ImageListItem>
                    </Box>
                </Box>
            </Container>
        </LandingWrapper>
    );
};

export default Landing;
