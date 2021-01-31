import { useContext } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Avatar,
  Stack,
  Button,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { navLinks } from "utils/static";
import { AuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Navbar = ({ isOpen, onClose }) => {
  const { session, logout } = useContext(AuthContext);
  const { username } = session.user || "";
  const router = useRouter();
  const { pathname, asPath } = router;

  return (
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
                  href={route === "/profile" ? `${route}/${username}` : route}
                  key={name}
                >
                  <Button
                    justifyContent="flex-start"
                    bg="none"
                    isActive={
                      route === pathname ||
                      (route === "/profile" &&
                        asPath === `/profile/${username}`)
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
  );
};

export default Navbar;
