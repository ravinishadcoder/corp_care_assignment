import React from "react";
import styles from "../styles/home.module.css";
import { MdSms } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  Divider,
  Input,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { GiWallet, GiTakeMyMoney, GiHelp } from "react-icons/gi";
import { RiFileList2Fill } from "react-icons/ri";
import { VscCommentDiscussion } from "react-icons/vsc";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineAnalytics,
} from "react-icons/md";
import { AiFillSchedule, AiFillSetting } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import Analytics from "../components/Analytics";
import Reminder from "../components/Reminder";
import TransactionFirst from "../components/TransactionFirst";
import MiniChart from "../components/MiniChart";
import Transfer from "../components/Transfer";

import { BarChar } from "../components/Barchart";

const LinkItems = [
  { name: "Overview", icon: GiWallet },
  { name: "Products", icon: MdOutlineProductionQuantityLimits },
  { name: "Analytics", icon: MdOutlineAnalytics },
  { name: "Schedule", icon: AiFillSchedule },
  { name: "Payout", icon: GiTakeMyMoney },
  { name: "Statements", icon: RiFileList2Fill },
];
const LinkItems2 = [
  { name: "Help", icon: GiHelp },
  { name: "Community", icon: VscCommentDiscussion },
  { name: "Settings", icon: AiFillSetting },
  { name: "Logout", icon: GrLogout },
];

export default function Home({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Flex
        ml={{ base: 0, md: 60 }}
        p="0"
        m="0"
        direction={["column", "column", "column", "row"]}
        className={styles.mainContainer}
        gap="2px"
      >
        <Box
          display={["none", "none", "none", "none", "flex"]}
          className={styles.searchBox}
        >
          <Box>
            <Text textAlign="start" fontSize="x-large" fontWeight="700">
              Hello, John 👋
            </Text>
          </Box>
          <Box className={styles.inputBox}>
            <BsSearch /> <Input placeholder="Search" />
          </Box>
        </Box>
        <Box className={styles.mainHomeBox}>
          <HStack className={styles.subHomeBox_first} mt="20px">
            <Box>
              <Box textAlign="start">
                <Text as="b">Analytics</Text>
              </Box>
              <Box mt="20px">
                <Analytics />
              </Box>
            </Box>
            <Box display={["none", "none", "block"]}>
              <Box textAlign="start">
                <Text as="b">Reminder</Text>
              </Box>
              <Box mt="20px">
                <Reminder />
              </Box>
            </Box>
          </HStack>
          <HStack mt="30px" alignItems="baseline" gap="5px">
            <Box display={["none", "none", "block"]}>
              <Box textAlign="start">
                <Text as="b">Recent Tractions</Text>
              </Box>
              <Box mt="20px">
                <TransactionFirst />
              </Box>
            </Box>
            <Box>
              <Box textAlign="start">
                <Text as="b">Recent Tractions</Text>
              </Box>
              <Box mt="20px">
                <MiniChart />
              </Box>
            </Box>
          </HStack>
        </Box>
        <Box bg="white" width="100%">
          <VStack mt="10px" spacing="20">
            <Box mt="20px">
              <Box textAlign="start">
                <Text as="b">Earnings</Text>
              </Box>
              <Box mt="20px">
                <BarChar />
              </Box>
            </Box>
            <Box>
              <Box textAlign="start">
                <Text as="b">Recent Transactions</Text>
              </Box>
              <Box mt="20px">
                <Transfer />
              </Box>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="4xl" color="#0038ff" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Divider orientation="horizontal" />
      {LinkItems2.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontWeight="700"
        color="gray"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            {/* <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            > */}

            <HStack spacing="10" fontSize="4xl" width="100%">
              <MdSms />
              <FiHardDrive />
              <BiUserCircle />
            </HStack>
            {/* </MenuButton> */}
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
