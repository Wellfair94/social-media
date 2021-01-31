import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "contexts/AuthContext";
import { useContext, useEffect } from "react";
import Navbar from "components/Navbar";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { pathname, asPath } = router;
  const { session } = useContext(AuthContext);
  const { username } = session.user || "";

  useEffect(() => {
    if (asPath === `/profile/${username}`) {
      onClose();
    }
  }, [asPath, username]);

  return (
    <>
      <Flex
        w="100%"
        h="60px"
        bg="brand.darkGrey"
        align="center"
        justify="space-between"
        px={4}
      >
        {pathname !== "/login" ? (
          <>
            <IconButton
              onClick={onOpen}
              colorScheme="none"
              aria-label="Menu"
              icon={<HamburgerIcon w="25px" h="25px" color="brand.white" />}
            />

            <Link href={`/profile/${username}`}>
              <Avatar size="sm" _hover={{ cursor: "pointer" }} />
            </Link>
          </>
        ) : null}
      </Flex>

      <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default Header;
