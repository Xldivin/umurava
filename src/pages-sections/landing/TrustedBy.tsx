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
import SokoFund from "../../assets/trusted_by/SokoFund.png";
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

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
    WSHLogo,
    SokoFund
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
    // loop through the logos and display them not using carousel
        return (
            <TrustedByWrapper>
                <Container sx={{ mt: 8, position: "relative" }}>
                    <Typography component="div" sx={{fontSize: 20,
                        fontWeight: 500, color: "#000"
                    }}>
                        Trusted by
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mt: 4,
                            mb: 4
                        }}
                        >
                        {logos1.map((logo, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <LazyImage
                                    src={logo}
                                    alt="Trusted by"
                                    width="100%"
                                    height="100%"
                                    sx={{ objectFit: "contain" }}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mb: 8
                        }}
                    >
                        {logos2.map((logo, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <LazyImage
                                    src={logo}
                                    alt="Trusted by"
                                    width="100%"
                                    height="100%"
                                    sx={{ objectFit: "contain" }}
                                />
                            </Box>
                        ))}
                    </Box>
                    </Container>
                </TrustedByWrapper>
            );
};

export default TrustedBy;