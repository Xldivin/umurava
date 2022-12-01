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

const Landing = () => {
    return (
        <Box sx={{ backgroundColor: "#2B71F0", height: { xs: "160vh", sm: "150vh", md: "100%", lg: "100vh" }, overflowY: "hidden",width:"100%",overflowX:"hidden" }}>
            <Header />
            <Container sx={{ display: "flex", flexDirection:{xs:"column",sd:"column",sm:"column",md:"column",lg:"row"},width: "100%", height: { xs: "60vh", sm: "80vh", md: "100%", lg: "100%" },mt:{xs: 5, sm: 5, md: 5, lg: 0},alignItems: { xs: "center", sd: "center", sm: "center", md: "center" },}}>
                    <Box sx={{display: "flex", flexDirection: "column",alignItems: { xs: "center", sd: "center", sm: "center", md: "flex-start" },mt:{xs: 10, sm: 10, md:10, lg: 0} }}>
                        <Box>
                            <Typography sx={{ color: "#001A40", fontWeight: 500, fontSize: { xs: 24, sm: 24, md: 20, lg: 20 }, lineHeight: 1, bottom: 5, fontFamily: "Work Sans" }}>
                                Umurava 1.0 coming soon....
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", marginTop: { xs: 4, sm: 5, md: 4, lg: 4 }, ml: { xs: 0, sm: 5, md: 0,lg:0,xl:0 },alignItems: { xs: "center", sd: "center", sm: "center", md: "flex-start" } }}>
                            <Typography variant={"h3"} sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: 32, sm: 36, md: 36, lg: 24 }, lineHeight: 1.2, FontFamily: "Work Sans",width:{xs:320,sd:350,sm:645,md:645,lg:430,xl:430} }}>
                                A Customized Talent Marketplace and
                            </Typography>
                            <Typography variant={"h3"} sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: 32, sm: 36, md: 36, lg: 24 }, lineHeight: 1.2, FontFamily: "Work Sans",width:{xs:320,sd:350,sm:645,md:645,lg:770,xl:845} }}>
                                End-to-End Workforce Outsourcing Platform,
                            </Typography>
                            <Typography variant={"h3"} sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: 32, sm: 36, md: 36, lg: 24 }, lineHeight: 1.2, FontFamily: "Work Sans",width:{xs:320,sd:350,sm:645,md:645,lg:430,xl:430} }}>
                                powered by AI.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", marginTop: { xs: 4, sm: 6, md: 4, lg: 4 },ml:{ xs: 0, sm: 5, md: 0,lg:0,xl:0 } }}>
                            <Typography sx={{ color: "#fff", fontWeight: 500, fontSize: { xs: 20, sm: 22, md: 20, lg: 20 }, lineHeight: 1.2, fontFamily: "Work Sans", bottom: 5,width:{xs:320,sd:350,sm:645,md:645,lg:680,xl:690}  }}>
                                We match companies & organizations with Africa’s Quality Talents & Teams
                                specialized in technology, creative & media, business, research & data, and transcription & translations for both short-term and long-term job opportunities.
                            </Typography>
                            <Typography sx={{ color: "#fff", fontWeight: 500, fontSize: { xs: 20, sm: 22, md: 20, lg: 20 }, fontFamily: "Work Sans", mt: { xs: 4, sm: 4, md: 4, lg: 8 },width:{xs:320,sd:350,sm:645,md:645,lg:460,xl:460} }}>
                                Trained and Vetted Talents & Teams for you.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection:{xs:"column",sd:"column",sm:"row"}, width: {xs:"60%",sm:"70%",md:"80%",lg:"80%"}, marginTop: { xs: 6, sm: 6, md: 4, lg: 0 },ml:{ xs: 0, sm: 5, md: 6,lg:6,xl:6 }  }}>
                            <Button sx={{ backgroundColor: "#1CBF73", color: "#fff", lineHeight: 1.2, bottom: { xs: 5, sd: -20, sm: 20, md: -20, lg: -35 }, width:{xs:280,sd:320,sm:220,md:220,lg:220,xl:220}, height: 50, borderRadius: 10, "&:hover": { backgroundColor: "#1CDF73", },ml:{xs:-5,sd:-7} }}>
                                <Link href={"/"}>
                                    <a style={{ textDecoration: "none", color: "#fff", fontStyle: "normal", textTransform: "none", }}>
                                        <Typography sx={{ fontFamily: "Work Sans", fontWeight: 500, fontSize: { xs: 16, sm: 16, md: 18, lg: 18 }, }}>
                                            Find Quality Talents
                                        </Typography>
                                    </a>
                                </Link>
                            </Button>
                            <Button variant={"outlined"} sx={{ color: "#fff", borderRadius: 10, borderColor: "#fff", lineHeight: 1.2, bottom: { xs: 5, sd: -20, sm: 20, md: -20, lg: -35 },width:{xs:280,sd:320,sm:220,md:220,lg:220,xl:220}, marginLeft: { sd: 2, sm: 2, md: 6, lg: 6 }, height: 50, "&:hover": { backgroundColor: "#1c91df", },mt:{xs:2,sd:2,sm:0},ml:{xs:-5,sd:-7} }}>
                                <Link href={"/"}><a style={{ textDecoration: "none", color: "#fff", fontStyle: "normal", textTransform: "none", }}>
                                    <Typography sx={{ fontFamily: "Work Sans", fontWeight: 500, fontSize: { xs: 16, sm: 16, md: 18, lg: 18 }, }}>
                                        Apply as a Talent
                                    </Typography>
                                </a>
                                </Link>
                            </Button>

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", height: { xs: "100%", sm: "100%", md: 0, lg: 0 }, marginTop: { xs: 1, sm: 1, md: 1, lg: 1 }, }}>
                             {/* <Box sx={{width: 15,height: 15,backgroundColor: "#fff",}}>
                            </Box>
                            <Box sx={{width: 40,height: 15,backgroundColor: "#1CBF73",}}></Box>
                            <Box sx={{color: "#fff",marginTop: { xs: -0.3, sm: -0.3, md: -0.7, lg: -0.7 },}}>
                                <Typography sx={{color: "#fff",fontWeight: 500,fontSize: { xs: 16, sm: 16, md: 20, lg: 20 },lineHeight: 1.2,marginLeft: 2,fontFamily: "Work Sans",}}>
                                    Book a Demo
                                </Typography>
                            </Box>
                            <Box sx={{color: "#fff",marginTop: { xs: -0.4, sm: -0.4, md: -1.2, lg: -1.2 },}}>
                                <ArrowRightAltIcon sx={{color: "#fff",fontSize: { xs: 24, sm: 24, md: 36, lg: 36 },lineHeight: 1.2,marginLeft: 1}}/>
                            </Box> */}
                        </Box>
                    </Box>

                    <Box sx={{ mt: 5, mb: 2,ml:-5 }}>
                        <ImageListItem sx={{ display: { xs: "none", sm: "none", md: "flex" }, alignItems: "center", justifyContent: "center",width:500 }}>
                            <Image
                                src={AfricaMap}
                            />
                        </ImageListItem>
                    </Box>
            </Container>
        </Box>
    );
};

export default Landing;
