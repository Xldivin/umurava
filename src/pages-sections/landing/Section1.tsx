import { Box, Button, Container, Typography } from "@mui/material";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H1, Paragraph, Span } from "components/Typography";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import Header from "./Header";
import AfricaMap from "../../assets/images/AfricaMap.svg";
import {display} from "@mui/system";


const Section1 = () => {
  // @ts-ignore
  return (
    <Box
        sx={{
            background: "#2B71F0",
            color: "#fff",
        }}
        >
      <Header />

      <Container id="section-1" sx={{ mt: 8, position: "relative",
      display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        marginLeft: -7,
          marginTop: 13
      }}
      >
        <Box maxWidth="830px" mx="auto" mb={8.5}
        sx={{
          display: "flex",
            flexDirection: "column"
        }}
        >
          <H1 color="secondary.main" fontSize="40px" mb={2} fontWeight="900">
            <Box fontSize="36px" color={"#fff"} fontWeight="900" mb={2}>
              Bringing Talent As A Service Workforce Infrastructure
            </Box>
          </H1>

          <Paragraph color="#fff" fontSize={20}
                     fontWeight="200" lineHeight="1.2"
                     maxWidth="580px" mb={4}>
            AI-Powered Customized Talent Marketplace and End-To-End Workforce Outsourcing Platform,
            enabling the businesses & organizations to easily find, hire, outsource,
            manage, and pay Africa's Vetted & Quality Freelance Talents and Teams specialized in the in-demand fields for the Digital Economy.
          </Paragraph>

          <FlexBox justifyContent="center" m={-1}>
            <Link
              href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
              passHref={true}
            >
              <Button variant="contained" color="success" sx={{ m: "0.5rem",
              borderRadius: "2rem",
                  marginLeft: -61,
                  marginTop: 5
              }}>
                  <Typography
                  color={"#fff"}
                  sx={{
                      fontWeight: "700",
                      fontStyle: "medium"
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
                    fontWeight: "900",
                    fontStyle: "medium",
                    marginTop: 5
              }}>
                Apply as a Talent
              </Button>
            </Scroll>
          </FlexBox>
            <Box
            sx={{
                marginRight: -140,
                marginTop: -50
            }}
            >
                <LazyImage
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        zIndex: 2,
                        imageResolution: 1
                    }}
                    width={417}
                    height={99}
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

export default Section1;
