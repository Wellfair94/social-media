import {
  HamburgerIcon,
  SettingsIcon,
  BellIcon,
  StarIcon,
  ExternalLinkIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Link href="/">
                  <Button justifyContent="flex-start" bg="none">
                    <CalendarIcon mr={2} />
                    Feed
                  </Button>
                </Link>

                <Link href="/profile">
                  <Button justifyContent="flex-start" bg="none">
                    <Avatar w="16px" h="16px" bg="brand.darkGrey" mr={2} />
                    Profile
                  </Button>
                </Link>

                <Link href="/starred">
                  <Button justifyContent="flex-start" bg="none">
                    <StarIcon mr={2} />
                    Starred
                  </Button>
                </Link>

                <Link href="/settings">
                  <Button justifyContent="flex-start" bg="none">
                    <SettingsIcon mr={2} />
                    Settings
                  </Button>
                </Link>

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
