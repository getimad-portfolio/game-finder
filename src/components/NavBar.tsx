import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, useColorMode, Image } from "@chakra-ui/react";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import SearchButton from "./SearchButton";
import SearchContainer from "./SearchContainer";
import useSearchStore from "../useSearchStore";

function NavBar() {
  const { colorMode } = useColorMode();
  const showSearchBox = useSearchStore((s) => s.showSearchBox);

  useEffect(() => {
    document.body.style.overflow = showSearchBox ? "hidden" : "visible";
  }, [showSearchBox]);

  return (
    <>
      <Box
        backgroundColor={colorMode === "dark" ? "oGray.900" : "oGray.50"}
        backdropFilter="saturate(180%) blur(10px)"
        position="fixed"
        w="100%"
        zIndex="200"
      >
        <Flex
          marginX="3rem"
          h="4rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/">
            <Flex alignItems="center" gap="2">
              <Image src="/icon.svg" alt="Game Finder icon" boxSize="28px" />
              <Text fontSize="lg" fontWeight={700}>
                Game Finder
              </Text>
            </Flex>
          </Link>
          <SearchButton />
          <ToggleThemeSwitch />
        </Flex>
      </Box>
      {showSearchBox && <SearchContainer />}
    </>
  );
}

export default NavBar;
