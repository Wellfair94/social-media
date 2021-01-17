import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { navLinks } from "@/utils/static";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useEffect } from "react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { pathname, asPath } = router;
  const { session, logout } = useContext(AuthContext);
  const { _id, username } = session.user || "";

  useEffect(() => {
    if (asPath === `/profile/${_id}`) {
      onClose();
    }
  }, [asPath, _id]);

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
        {pathname !== "/" ? (
          <>
            <IconButton
              onClick={onOpen}
              colorScheme="none"
              aria-label="Menu"
              icon={<HamburgerIcon w="25px" h="25px" color="brand.white" />}
            />

            <Link href={`/profile/${_id}`}>
              <Avatar size="sm" _hover={{ cursor: "pointer" }} />
            </Link>
          </>
        ) : null}
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>
              <Avatar size="sm" mr={2} />
              {username}
            </DrawerHeader>

            <Divider />

            <DrawerBody>
              <Stack mt={4}>
                {navLinks.map(({ name, icon, route }) => (
                  <Link
                    href={route === "/profile" ? `${route}/${_id}` : route}
                    key={name}
                  >
                    <Button
                      justifyContent="flex-start"
                      bg="none"
                      isActive={
                        route === pathname ||
                        (route === "/profile" && asPath === `/profile/${_id}`)
                      }
                    >
                      {icon}
                      {name}
                    </Button>
                  </Link>
                ))}

                <Button justifyContent="flex-start" bg="none" onClick={logout}>
                  <ExternalLinkIcon mr={2} />
                  Logout
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
