import { CalendarIcon, ChatIcon, SettingsIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";

export const applicationRoles = [
  {
    value: 0,
    label: "User",
  },
  {
    value: 1,
    label: "Administrator",
  },
];

export const navLinks = [
  {
    name: "Feed",
    icon: <CalendarIcon mr={2} />,
    route: "/feed",
  },
  {
    name: "Profile",
    icon: <Avatar w="16px" h="16px" bg="brand.darkGrey" mr={2} />,
    route: "/profile",
  },
  {
    name: "Messenger",
    icon: <ChatIcon mr={2} />,
    route: "/messenger",
  },
  {
    name: "Settings",
    icon: <SettingsIcon mr={2} />,
    route: "/settings",
  },
];
