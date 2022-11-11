/* eslint-disable react-hooks/exhaustive-deps */
import Menu from "@mui/icons-material/Menu";
import { Box, Button, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import clsx from "clsx";
// import Image from "components/BazarImage";
// import { FlexBetween, FlexBox } from "components/flex-box";
// import Sidenav from "components/sidenav/Sidenav";
import debounce from "lodash/debounce";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

const headerHeight = 72;

const slideFromTop = keyframes`
from { top: -${headerHeight}px; }
to { top: 0; }`;

const HeaderWrapper = styled(Box)(({ theme }) => ({
    "& .link": {
        cursor: "pointer",
        transition: "color 250ms ease-in-out",
        "&:hover": { color: theme.palette.primary.main },
    },

    "& .fixedHeader": {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        background: "#2B71F0",
        color: "#fff",
        height: headerHeight,
        boxShadow: theme.shadows[2],
        animation: `${slideFromTop} 250ms ease-in-out`,
        "& .link": { color: "inherit" },
    },

    [theme.breakpoints.down("sm")]: {
        "& .right-links": { display: "none" },
        "& .purchase-link": { display: "none" },
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);
    const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    const toggleSidenav = () => setOpen((open) => !open);

    const scrollListener = useCallback(
        debounce(() => {
            if (window?.pageYOffset >= headerHeight) setFixed(true);
            else setFixed(false);
        }, 50),
        []
    );

    useEffect(() => {
        if (!window) return null;

        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    return (
        <Fragment>
            <HeaderWrapper>
                <Box className={clsx({ fixedHeader: isFixed })}
                sx={{
                backgroundColor: "#2B71F0",
                    display: "flex",
                    alignItems: "flex-end"
                }
                }
                >
                    <Container>
                        <Box height={headerHeight}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            paddingTop: "2rem"
                        }}
                        >
                            <Scroll to="top" duration={400} smooth={true} isDynamic>
                            {/*  <Box sx={{ cursor: "pointer" }}>*/}
                            {/*    <Image width="96px" height="44px" src="/assets/images/logo2.svg" alt="logo" />*/}
                            {/*  </Box>*/}
                            {/*</Scroll>*/}

                            {/*<FlexBox className="right-links" alignItems="center">*/}
                            {/*    <Scroll to="features" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*        <Typography className="link" color="#fff" p="0.25rem 1.25rem">*/}
                            {/*            Platform*/}
                            {/*        </Typography>*/}
                            {/*    </Scroll>*/}

                            {/*    <Scroll to="demos" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*        <Typography className="link" color="#fff" p="0.25rem 1.25rem">*/}
                            {/*            Solutions*/}
                            {/*        </Typography>*/}
                            {/*    </Scroll>*/}

                            {/*    <Scroll to="technologies" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*        <Typography className="link" color="#fff" p="0.25rem 1.25rem">*/}
                            {/*            How It works*/}
                            {/*        </Typography>*/}
                            {/*    </Scroll>*/}

                            {/*    <Scroll to="technologies" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*        <Typography className="link" color="#fff" p="0.25rem 1.25rem">*/}
                            {/*            About us*/}
                            {/*        </Typography>*/}
                            {/*    </Scroll>*/}

                            {/*    <Scroll to="technologies" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*        <Typography className="link" color="#fff" p="0.25rem 1.25rem">*/}
                            {/*            Industries*/}
                            {/*        </Typography>*/}
                            {/*    </Scroll>*/}
                            {/*</FlexBox>*/}


                            {/*<Scroll to="features" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*    <Typography className="link" py={2} onClick={toggleSidenav}*/}
                            {/*                sx={{ cursor: "pointer", color: "#fff",*/}
                            {/*                    marginLeft: 55,*/}
                            {/*                    fontSize: 16*/}
                            {/*                }}>*/}
                            {/*        Login*/}
                            {/*    </Typography>*/}
                            </Scroll>
                            {!downSM && (
                                <Link
                                    passHref={true}
                                    href="mailto:info@umurava.com"
                                >
                                    <Button variant="contained"
                                            sx={{
                                                borderRadius: "2rem",
                                                fontSize: 24,
                                                backgroundColor: "#1CBF73",
                                            }}
                                    >
                                        <Typography
                                            color={"#fff"}
                                        >
                                            Book a Demo
                                        </Typography>
                                    </Button>
                                </Link>
                            )}
                            {/* had Sidenav here %%%%%%%%%%%*/}
                            {/* mobile menu */}
                            {/*{downSM && (*/}
                            {/*    <Box*/}
                            {/*        open={open}*/}
                            {/*        width={260}*/}
                            {/*        position="right"*/}
                            {/*        toggleSidenav={toggleSidenav}*/}
                            {/*        handle={*/}
                            {/*            <IconButton>*/}
                            {/*                <Menu />*/}
                            {/*            </IconButton>*/}
                            {/*        }*/}
                            {/*    >*/}
                            {/*        <Box*/}
                            {/*            p={2}*/}
                            {/*            sx={{*/}
                            {/*                "& .link": {*/}
                            {/*                    cursor: "pointer",*/}
                            {/*                    transition: "color 250ms ease-in-out",*/}
                            {/*                    "&:hover": { color: "primary.main" },*/}
                            {/*                },*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            <Scroll to="features" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*                <Typography className="link" py={1} onClick={toggleSidenav}>*/}
                            {/*                    Features*/}
                            {/*                </Typography>*/}
                            {/*            </Scroll>*/}

                            {/*            <Scroll to="demos" duration={400} offset={-headerHeight - 16} smooth={true}>*/}
                            {/*                <Typography className="link" py={1} onClick={toggleSidenav}>*/}
                            {/*                    Demos*/}
                            {/*                </Typography>*/}
                            {/*            </Scroll>*/}

                            {/*            <Scroll*/}
                            {/*                smooth={true}*/}
                            {/*                duration={400}*/}
                            {/*                to="technologies"*/}
                            {/*                offset={-headerHeight - 16}*/}
                            {/*            >*/}
                            {/*                <Typography className="link" py={1} mb={2} onClick={toggleSidenav}>*/}
                            {/*                    Technologies*/}
                            {/*                </Typography>*/}
                            {/*            </Scroll>*/}

                            {/*            <Link*/}
                            {/*                href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"*/}
                            {/*                passHref={true}*/}
                            {/*            >*/}
                            {/*                <Button variant="outlined" color="primary">*/}
                            {/*                    Purchase Now*/}
                            {/*                </Button>*/}
                            {/*            </Link>*/}
                            {/*        </Box>*/}
                            {/*    </Box>*/}
                            {/*)}*/}
                        </Box>
                    </Container>
                </Box>
            </HeaderWrapper>

            {/*{isFixed && <Box height={headerHeight} />}*/}
        </Fragment>
    );
};

export default Header;
