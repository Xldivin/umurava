import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { styled, Theme } from "@mui/material/styles";

import CIBALogo from "../../assets/trusted_by/CIBA.png";
import EducationCollaborative from "../../assets/trusted_by/EducationCollaborative.png";
import Gdg_Kigali from "../../assets/trusted_by/Gdg_Kigali.png";
import HiiL_Logo from "../../assets/trusted_by/HiiL_Logo.png";
import IGIHE_LOGO from "../../assets/trusted_by/IGIHE_LOGO.png";
import KeplerLogo from "../../assets/trusted_by/KeplerLogo.png";
import LateriteLogo from "../../assets/trusted_by/Laterite.png";
import QuiqpayLogo from "../../assets/trusted_by/Quiqpay.svg";
import Tori from "../../assets/trusted_by/Tori.png";
import Viamo_Logo from "../../assets/trusted_by/Viamo_Logo.png";
import WSHLogo from "../../assets/trusted_by/WSH.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// an array of the logos
const logos1 = [
    CIBALogo,
    EducationCollaborative,
    Gdg_Kigali,
    HiiL_Logo,
    IGIHE_LOGO,
    KeplerLogo
];

const logos2 = [
    LateriteLogo,
    QuiqpayLogo,
    Tori,
    Viamo_Logo,
    WSHLogo
];
// use carousel to display logos
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    }
};

const TrustedByWrapper = styled(Box)(({ theme }) => ({
    "& .link": {
        color: theme.palette.primary.main,
        cursor: "pointer",
        transition: "color 250ms ease-in-out",
        "&:hover": { color: theme.palette.primary.main },
    },
}));

const TrustedBy = () => {
    // @ts-ignore
    return (
        <TrustedByWrapper>
            <Container id="section-1" sx={{ mt: 8, position: "relative",
                display: "flex",
                flexDirection: "row",
                marginTop: 4
            }}
            >
                <Box maxWidth="830px" mx="auto" mb={8.5}
                     sx={{
                         display: "flex",
                         flexDirection: "column"
                     }}
                >
                    <Typography component="div" sx={{fontSize: 20, fontWeight: 500, color: "#fff", mb: -4}}

                    >
                        Our Partners
                    </Typography>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                          {logos1.map((logo, index) => (
                                <LazyImage
                                    key={index}
                                    src={logo}
                                    alt="Trusted By"
                                    width="100%"
                                    height="100%"
                                    sx={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "auto",
                                        padding: "10px"
                                    }}
                                />
                            ))}
                    </Carousel>
                    {/* carousel that move the opposite direction*/}
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {logos2.map((logo, index) => (
                            <LazyImage
                                key={index}
                                src={logo}
                                alt="Trusted By"
                                width="100%"
                                height="100%"
                                sx={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "auto",
                                    padding: "10px"
                                }}
                            />
                        ))}
                    </Carousel>
                </Box>
            </Container>
        </TrustedByWrapper>
    );
}

export default TrustedBy;