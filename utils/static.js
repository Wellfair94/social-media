import { CalendarIcon, StarIcon, SettingsIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";

export const navLinks = [
  {
    name: "Feed",
    icon: <CalendarIcon mr={2} />,
    route: "/",
  },
  {
    name: "Profile",
    icon: <Avatar w="16px" h="16px" bg="brand.darkGrey" mr={2} />,
    route: "/profile",
  },
  {
    name: "Starred",
    icon: <StarIcon mr={2} />,
    route: "/starred",
  },
  {
    name: "Settings",
    icon: <SettingsIcon mr={2} />,
    route: "/settings",
  },
];
