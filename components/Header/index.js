import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
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
} from "@chakra-ui/react";
import Link from "next/link";
import { navLinks } from "@/utils/static";
import { useRouter } from "next/router";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { pathname } = router;

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
        <IconButton
          onClick={onOpen}
          colorScheme="none"
          aria-label="Menu"
          icon={<HamburgerIcon w="25px" h="25px" color="brand.white" />}
        />

        <Link href="/profile">
          <Avatar size="sm" _hover={{ cursor: "pointer" }} />
        </Link>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>
              <Avatar size="sm" mr={2} />
              Freddie Wellfair
            </DrawerHeader>

            <Divider />

            <DrawerBody>
              <Stack mt={4}>
                {navLinks.map(({ name, icon, route }) => (
                  <Link href={route} key={name}>
                    <Button
                      justifyContent="flex-start"
                      bg="none"
                      isActive={route === pathname}
                    >
                      {icon}
                      {name}
                    </Button>
                  </Link>
                ))}

                <Button justifyContent="flex-start" bg="none">
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
