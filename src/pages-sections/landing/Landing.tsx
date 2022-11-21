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
    // const theme = createTheme({
    //     breakpoints:{
    //         values:{
    //             xs: 0,
    //             sd: 400,
    //             sm: 600,
    //             md: 900,
    //             lg: 1300,
    //             xl: 1536,
    //         }
    //     },
    //     // @ts-ignore
    //     status: {
    //         danger: '#e53e3e',
    //     },
    // })
    // @ts-ignore
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
                    height: { xs: "60vh", sm: "60vh", md: "100vh", lg: "80vh" },
                    // backgroundColor: "#2B71F0",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        display: { md: "flex" },
                        flexDirection: { md: "row", xs: "column", sm: "column" },
                        width: "100%",
                        height: { md: "80%", xs: "100%", sm: "100%" },
                        position: { md: "absolute", xs: "relative", sm: "relative" },
                        // backgroundColor: "yellow",
                        top: 30,
                        left: 0
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            // backgroundColor: "red",
                            // left: { md: 100, xs: 80, sm: 80 }
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 500,
                                    fontSize: { xs: 24, sm: 24, md: 20, lg: 20 },
                                    textAlign: "center",
                                    lineHeight: 1,
                                    bottom: 5,
                                    marginTop: { xs: 4, sm: 4, md: 0, lg: 0 },
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
                                alignItems: "flex-start",
                                width: "80%",
                                position: "relative",
                                marginTop: { xs: 4, sm: 5, md: 4, lg: 4 },
                                // backgroundColor: "green",
                            }}
                        >
                            <Typography
                                variant={"h3"}
                                sx={{
                                    color: "#fff",
                                    fontWeight: 500,
                                    fontSize: { xs: 32, sm: 36, md: 36, lg: 30 },
                                    lineHeight: 1.2,
                                    FontFamily: "Work Sans",
                                    mb: 2
                                }}>
                                “Introducing Talent As a Service”
                            </Typography>
                            <Typography
                                variant={"h3"}
                                sx={{
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: { xs: 32, sm: 36, md: 36, lg: 30 },
                                    lineHeight: 1.2,
                                    FontFamily: "Work Sans",
                                }}
                            >
                                An AI-Powered Customized Talent Marketplace
                                and End-to-End Workforce Outsourcing Platform.

                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                width: { xs: "70%", sm: "60%", md: "100%", lg: "100%" },
                                height: "100%",
                                position: "relative",
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
                                    lineHeight: 1.2,
                                    fontFamily: "Work Sans",
                                    bottom: 5,
                                    marginTop: { xs: 4, sm: 4, md: 4, lg: 4 }
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
                                position: "relative",
                                // backgroundColor: "green",
                                marginTop: { xs: 6, sm: 6, md: 4, lg: 4 },
                            }}
                        >
                            <Button
                                variant={"contained"}
                                sx={{
                                    backgroundColor: "#1CBF73",
                                    color: "#fff",

                                    lineHeight: 1.2,
                                    bottom: 5,
                                    width: 220,
                                    // FontFamily: "Work Sans",
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
                                    bottom: 5,
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
                                position: { md: "relative", xs: "relative", sm: "relative" },
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
                                    position: { xs: "relative", sm: "relative", md: "relative", lg: "relative" },
                                    bottom: 3,
                                    left: { xs: 1, sm: 2, md: 250, lg: 250 },
                                    width: 220,
                                    marginLeft: { xs: 8, sm: 30, md: 6, lg: 35 },
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

                    <Box
                        sx={{
                            top: { xs: 0, sm: 6, md: 6, lg: 6 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            width: "90%",
                            height: "90%",
                            position: "relative"
                            // backgroundColor: "green"
                        }}
                    >
                        <ImageListItem
                            sx={{
                                display: { xs: "none", sm: "none", md: "flex" },
                                alignItems: "center",
                                justifyContent: "center",
                                width: { xs: "100%", md: "70%", lg: "80%", xl: "80%" },
                                height: { xs: "100%", md: "70%", lg: "80%", xl: "80%" },
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
