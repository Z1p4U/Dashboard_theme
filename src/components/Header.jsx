import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
  em,
  getBreakpointValue,
  Button,
  Modal,
  useMantineTheme,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdOutlineDateRange, MdOutlineNotificationsOff } from "react-icons/md";
import { AiOutlineDown, AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggle as sideToggler } from "../redux/sideSlice";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "../redux/authSlice";
import { Link, useLocation } from "react-router-dom";
import { BiPieChartAlt } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginBottom: "0px !important",
    height: "69.09px",
    maxHeight: "69.09px",
    position: "relative",
    // display: `${token ? "block" : 'none'}`,
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xs) - 1)})`]:
      {
        // backgroundColor: theme.colors.pink[6],
        width: "100%",
        margin: 0,
      },
  },

  inner: {
    height: "69.09px",
    marginLeft: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        // backgroundColor: theme.colors.pink[6],
        width: "50%",
        margin: 0,
      },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export function Navbar() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [key, setKey] = useState();
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);
  const { classes } = useStyles();
  // side(opened);
  const sideSelector = useSelector((state) => state.side.side);
  const path = useLocation();
  const dispatch = useDispatch();

  const authToken = useSelector((state) => state.authSlice.token);
  const token = Cookies.get("token");
  // const items = links?.link?.map((link) => {

  //   return (
  //       <a
  //     key={links.length}
  //     href={link.link}
  //     className={classes.link}
  //     onClick={(event) => event.preventDefault()}
  //   >
  //     {link.label}
  //   </a>
  //   )
  //   });

  useEffect(() => {
    setKey(authToken);
  }, [authToken]);

  console.log(token);
  useEffect(() => {
    dispatch(sideToggler());
  }, [opened]);

  return (
    // <button onClick={() => dispatch(toggle())}>Dis</button>
    <Header
      height={59}
      className={`${
        token && path.pathname !== "/signin" && path.pathname !== "/signup"
          ? `${"px-[10px] h-[69.09px] max-h-[69.09px] !mb-0 relative block"}`
          : "hidden"
      }`}
      mb={120}
    >
      <div className={classes.inner}>
        <div className=" grid grid-cols-12 align-middle items-center">
          <div className=" col-start-1 col-span-2 flex gap-3 ">
            <div>
              <Burger opened={sideSelector} onClick={toggle} size="md" />
            </div>
            <div>
              <Autocomplete
                className={classes.search}
                placeholder="Search project..."
                icon={<IconSearch size="1rem" stroke={1.5} />}
                data={[
                  "React",
                  "Angular",
                  "Vue",
                  "Next.js",
                  "Riot.js",
                  "Svelte",
                  "Blitz.js",
                ]}
              />
            </div>
            {/* <MantineLogo size={28} /> */}
            {/* <Button
              rightIcon={<AiOutlineDown />}
              styles={(theme) => ({
                root: {
                  backgroundColor: "#00acee",
                  border: 0,
                  height: rem(42),
                  fontSize: "10px",
                  "&:not([data-disabled])": theme.fn.hover({
                    backgroundColor: "#fff",
                  }),
                },
              })}
              onClick={modalOpen}
              size="sm"
              className=" text-black flex items-start gap-5"
            >
              Mega Menu
            </Button> */}
          </div>

          <div className=" col-start-3 col-span-3">
            <Menu
              withArrow
              position="bottom"
              arrowPosition="center"
              transitionProps={{ transition: "scale-y", duration: 600 }}
              shadow="md"
              width={{ xs: 150, sm: 180, md: 280, lg: 710, xl: 780 }}
            >
              <Menu.Target>
                <Button
                  size="md"
                  variant="white"
                  color="dark"
                  compact
                  className=" w-30 text-sm"
                  rightIcon={<FaChevronDown size={9} />}
                >
                  Mega Menu
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <div className="grid grid-cols-3 gap-4 px-4 pb-5">
                  <div className=" col-start-1 col-span-3 md:col-start-1 md:col-span-1 mt-5 md:mt-2">
                    <Menu.Label className=" px-6 py-2">UI Elements</Menu.Label>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Buttons
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Cards
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Carousel
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      General
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Grid
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Modals
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Tabs
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Typography
                    </Menu.Item>
                  </div>
                  <div className="col-start-1 col-span-3 md:col-start-2 md:col-span-1 mt-5 md:mt-2">
                    <Menu.Label className=" px-6 py-2">Forms</Menu.Label>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Layouts
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Basic Inputs
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Input Groups
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Advanced Inputs
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Editors
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Validation
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Wizard
                    </Menu.Item>
                  </div>
                  <div className="col-start-1 col-span-3 md:col-start-3 md:col-span-1 mt-5 md:mt-2">
                    <Menu.Label className=" px-6 py-2">Tables</Menu.Label>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Basic Tables
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Responsive Tables
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Tables With Buttons
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Column Search
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Multi selection
                    </Menu.Item>
                    <Menu.Item className=" px-6 py-[5.6px] w-[250px] h-8">
                      Ajax Source Data
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Dropdown>
            </Menu>
          </div>

          <div className=" col-start-6 col-span-7">
            <div className=" flex align-middle items-center me-0 md:me-5 justify-end gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <Menu
                withArrow
                arrowPosition="center"
                transitionProps={{ transition: "scale-y", duration: 500 }}
                shadow="md"
                width={350}
              >
                <Menu.Target>
                  <Button
                    size="xl"
                    variant="white"
                    color="dark"
                    style={{ padding: "0px" }}
                    compact
                  >
                    <div className=" relative cursor-pointer transition-all">
                      <TbMessageCircle2
                        size={20}
                        className=" me-1 hover:mt-1 transition-all"
                      />
                      <span
                        className=" w-4 h-4 text-white bg-blue-600 rounded-full absolute -top-2 -right-3 font-semibold flex items-center justify-center me-3"
                        style={{ fontSize: "10px" }}
                      >
                        <p>4</p>
                      </span>
                    </div>
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className=" font-semibold text-base text-center">
                    4 New Messages
                  </Menu.Label>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <img
                            src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                            className=" rounded-full "
                          />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-base font-semibold">
                            Ashley Briggs
                          </div>
                          <p className=" text-xs mt-1 text-slate-400">
                            Nam pretium turpis et arcu. Duis arcu tortor.
                          </p>
                          <p className=" text-xs mt-1 text-slate-500">
                            15m ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <img
                            src="https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                            className=" rounded-full "
                          />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-base font-semibold">
                            Carl Jenkins
                          </div>
                          <p className=" text-xs mt-1 text-slate-400">
                            Curabitur ligula sapien euismod vitae.
                          </p>
                          <p className=" text-xs mt-1 text-slate-500">2h ago</p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <img
                            src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                            className=" rounded-full "
                          />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-base font-semibold">
                            Stacie Hall
                          </div>
                          <p className=" text-xs mt-1 text-slate-400">
                            Pellentesque auctor neque nec urna.
                          </p>
                          <p className=" text-xs mt-1 text-slate-500">
                            14h ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <img
                            src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                            className=" rounded-full "
                          />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-base font-semibold">
                            Bertha Martin
                          </div>
                          <p className=" text-xs mt-1 text-slate-400">
                            Aenean tellus metus, bibendum sed, posuere ac,
                            mattis non.
                          </p>
                          <p className=" text-xs mt-1 text-slate-500">5h ago</p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <a href="#">
                    <Menu.Label className=" text-xs text-center hover:underline cursor-pointer">
                      Show All Messages
                    </Menu.Label>
                  </a>
                </Menu.Dropdown>
              </Menu>

              <Menu
                withArrow
                arrowPosition="center"
                transitionProps={{ transition: "scale-y", duration: 500 }}
                shadow="md"
                width={350}
              >
                <Menu.Target>
                  <Button
                    size="xl"
                    variant="white"
                    color="dark"
                    style={{ padding: "0px" }}
                    compact
                  >
                    <MdOutlineNotificationsOff size={23} />
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className=" font-semibold text-base text-center">
                    4 New Notifications
                  </Menu.Label>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <CgDanger color=" red" size={20} />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-sm font-semibold">
                            Update Completed
                          </div>
                          <p className=" text-xs mt-1 text-slate-400">
                            Reset Server 12 to complete the update
                          </p>
                          <p className=" text-xs mt-1 text-slate-500">2h ago</p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <AiOutlineBell color=" orange" size={20} />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-sm font-semibold">
                            Lorem ipsum
                          </div>
                          <p className=" text-xs mt-1 text-slate-400">
                            dolor sit, amet consectetur adipisicing elit.
                            Facilis, commodi!
                          </p>
                          <p className=" text-xs mt-1 text-slate-500">6h ago</p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <AiOutlineHome color=" blue" size={20} />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-sm font-semibold">
                            login from 192.168.1.1
                          </div>
                          <p className=" text-xs mt-1 text-slate-500">8h ago</p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item>
                    <div className="px-[10px]">
                      <div className=" grid grid-cols-12">
                        <div className=" col-start-1 col-span-2 flex justify-center align-middle items-center">
                          <AiOutlineUserAdd color=" green" size={20} />
                        </div>
                        <div className=" ps-4 col-start-3 col-span-10">
                          <div className=" text-sm font-semibold">
                            New Connection
                          </div>
                          <p className=" text-xs mt-1 text-slate-400">
                            Anna accepted your request
                          </p>
                          <p className=" text-xs mt-1 text-slate-500">
                            12h ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Divider />

                  <a href="#">
                    <Menu.Label className=" text-xs text-center hover:underline cursor-pointer">
                      Show All Notifications
                    </Menu.Label>
                  </a>
                </Menu.Dropdown>
              </Menu>

              <Menu
                withArrow
                arrowPosition="center"
                transitionProps={{ transition: "scale-y", duration: 500 }}
                shadow="md"
                width={160}
              >
                <Menu.Target>
                  <Button
                    size="xl"
                    variant="white"
                    color="dark"
                    style={{ padding: "0px" }}
                    compact
                  >
                    <div className=" w-5 h-5 rounded-full overflow-hidden bg-cover bg-fixed">
                      <img
                        className=" h-full"
                        src="https://appstack.bootlab.io/img/flags/us.png"
                        alt=""
                      />
                    </div>
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>
                    <div className="flex justify-normal gap-2 align-middle items-center">
                      <img
                        className=" w-6 me-1"
                        src="https://appstack.bootlab.io/img/flags/us.png"
                        alt=""
                      />
                      <p>English</p>
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="flex justify-normal gap-2 align-middle items-center">
                      <img
                        className=" w-6 me-1"
                        src="https://appstack.bootlab.io/img/flags/es.png"
                        alt=""
                      />
                      <p>Spanish</p>
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="flex justify-normal gap-2 align-middle items-center">
                      <img
                        className=" w-6 me-1"
                        src="https://appstack.bootlab.io/img/flags/de.png"
                        alt=""
                      />
                      <p>German</p>
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="flex justify-normal gap-2 align-middle items-center">
                      <img
                        className=" w-6 me-1"
                        src="https://appstack.bootlab.io/img/flags/nl.png"
                        alt=""
                      />
                      <p>Dutch</p>
                    </div>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Menu
                withArrow
                arrowPosition="center"
                transitionProps={{ transition: "scale-y", duration: 500 }}
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <Button
                    size="xl"
                    variant="white"
                    color="dark"
                    className=" hidden sm:block"
                    style={{ padding: "0px" }}
                    compact
                    leftIcon={
                      <div className=" w-10 h-10 rounded-full overflow-hidden bg-cover bg-fixed">
                        <img
                          className=" w-10 h-10"
                          src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                          alt=""
                        />
                      </div>
                    }
                    rightIcon={
                      <FaChevronDown size={9} className=" hidden lg:block" />
                    }
                  >
                    <div className=" hidden lg:block text-xs">Chris Wood</div>
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Link to={"/profiles"}>
                    <Menu.Item>
                      <div className=" flex justify-normal align-middle items-center gap-2">
                        <IoPersonCircleOutline size={24} />
                        <p>Profile</p>
                      </div>
                    </Menu.Item>
                  </Link>

                  <Link to={"/analytics"}>
                    <Menu.Item>
                      <div className=" flex justify-normal align-middle items-center gap-2">
                        <BiPieChartAlt size={24} />
                        <p>Analytics</p>
                      </div>
                    </Menu.Item>
                  </Link>

                  <Menu.Divider />
                  <Link to={"/setting"}>
                    <Menu.Item>Setting And Privacy</Menu.Item>
                  </Link>
                  <Menu.Item>Help</Menu.Item>
                  <Link to={"/signin"}>
                    <Menu.Item>Sign Out</Menu.Item>
                  </Link>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
        {/* <Group mr={30} spacing={3}>
          <div className=" flex items-center gap-2 md:gap-5"></div>
        </Group> */}

        {/* <Modal
          overlayProps={{
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[2],
            opacity: 0.124,
            blur: 0,
            height: "200px !important",
            width: "750px !important",
          }}
          yOffset={"12vh"}
          opened={modalOpened}
          onClose={modalClose}
          title=""
        >
          <table className=" text-xs table-fixed h-full w-full !m-0">
            <thead>
              <tr>
                <th className=" pe-10 h-10">UI Elements</th>
                <th className=" pe-10 h-10">Forms</th>
                <th className=" pe-10 h-10">Tables</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "10px" }}>
              <tr>
                <td>Alerts</td>
                <td>Layouts</td>
                <td>Basic Tables</td>
              </tr>
              <tr>
                <td>Buttons</td>
                <td>Basic Inputs</td>
                <td>Responsive Tables</td>
              </tr>
              <tr>
                <td>Cards</td>
                <td>Input Groups</td>
                <td>Table with Buttons</td>
              </tr>
            </tbody>
          </table>
        </Modal> */}

        {/* <Group mr={30} spacing={5} className=" min-w-[300px]"></Group> */}
      </div>
    </Header>
  );
}
