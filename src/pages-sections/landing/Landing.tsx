import { Box, Button, Container, Typography } from "@mui/material";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H1, Paragraph, Span } from "components/Typography";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { styled, Theme } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import Header from "./Header1";
import AfricaMap from "../../assets/images/AfricaMap.svg";
import {display} from "@mui/system";

const EmailUsWrapper = styled(Box)(({ theme }) => ({
    "& .link": {
        color: theme.palette.primary.main,
        cursor: "pointer",
        transition: "color 250ms ease-in-out",
        "&:hover": { color: theme.palette.primary.main },
    },
}));

const Landing = () => {
    // @ts-ignore
    return (
        <Box
            sx={{
                background: "#2B71F0",
                color: "#fff",
            }}
        >
            <Header />
            <Container id="section-1" sx={{
                mt: 8, position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "left"
            }}>
                <Typography component="div" sx={{fontSize: 20, fontWeight: 500, color: "#fff", mb: -4}}>
                    Umurava 1.0 coming soon
                    </Typography>
            </Container>

            <Container id="section-1" sx={{ mt: 8, position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                marginLeft: -30,
                marginTop: 13
            }}
            >
                <Box maxWidth="830px" mx="auto" mb={8.5}
                     sx={{
                         display: "flex",
                         flexDirection: "column"
                     }}
                >
                    <H1 color="secondary.main" fontSize="40px" fontWeight="700"
                    style={{marginBottom: 20}}
                    >
                        <Box fontSize="36px" color={"#fff"} fontWeight="700" mb={0}>
                            Bringing Talent As A Service
                        </Box>
                        <Box fontSize="36px" color={"#fff"} fontWeight="700" mt={-1}>
                            Workforce Infrastructure
                        </Box>  
                    </H1>

                    <Paragraph color="#fff" fontSize={20}
                               fontWeight="200" lineHeight="1.2"
                               maxWidth="480px" mb={4}>
                                   AI-Powered Customized Talent Marketplace and
                                    End-To-End Workforce Outsourcing Platform.
                                    We enable the businesses & organizations to easily find, hire, outsource, manage, and pay Africa's Vetted & Quality Freelance Talents
                        and Teams specialized in the in-demand fields for the Digital Economy.
                    </Paragraph>

                    <FlexBox justifyContent="center" m={-1}>
                        <Link
                            href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
                            passHref={true}
                        >
                            <Button variant="contained" color="success" sx={{ m: "0.5rem",
                                borderRadius: "2rem",
                                marginLeft: -14,
                                marginTop: 5
                            }}>
                                <Typography
                                    color={"#fff"}
                                    sx={{
                                        fontWeight: "500",
                                        fontStyle: "regular"
                                    }}
                                >
                                    Find Quality Talents
                                </Typography>
                            </Button>
                        </Link>

                        <Scroll to="get" duration={400} offset={-72 - 16} smooth={true}
                        >
                            <Button variant="outlined"
                                    sx={{ m: "0.5rem",
                                        borderRadius: "2rem",
                                        fontWeight: "500",
                                        fontStyle: "regular",
                                        marginTop: 5
                                    }}>
                                Apply as a Talent
                            </Button>
                        </Scroll>
                    </FlexBox>
                    <EmailUsWrapper>
                        <Link
                            href="mailto:info@umurava.com"
                            passHref={true}
                        >
                            <Button variant="outlined" color="success" sx={{ m: "0.5rem",
                                marginTop: 5,
                                width: 200,
                                marginLeft: 55,
                                marginRight: -15
                            }}>
                                <Typography
                                    color={"#fff"}
                                    sx={{
                                        fontWeight: "500",
                                        fontStyle: "regular"
                                    }}
                                >
                                    Send us an email
                                </Typography>
                            </Button>
                        </Link>
                    </EmailUsWrapper>

                    <Box
                        sx={{
                            marginRight: -170,
                            marginTop: -75
                        }}
                    >
                        <LazyImage
                            sx={{
                                position: "relative",
                                bottom: 0,
                                right: 0,
                                zIndex: 2,
                                imageResolution: 1
                            }}
                            width={327}
                            height={105}
                            layout="responsive"
                            src={AfricaMap}
                        />
                    </Box>

                </Box>

                {/*<LazyImage*/}
                {/*  width={5417}*/}
                {/*  height={1179}*/}
                {/*  layout="responsive"*/}
                {/*  src="/assets/images/landing/page-group-2.png"*/}
                {/*/>*/}
                {/*  Add the africa map here*/}

            </Container>

        </Box>
    );
};

export default Landing;
