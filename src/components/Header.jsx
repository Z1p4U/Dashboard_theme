import { createStyles, Header, Autocomplete, Group, Burger, rem, em, getBreakpointValue, Button, Modal, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { TbMessageCircle2 } from "react-icons/tb";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggle as sideToggler } from '../redux/sideSlice';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUser } from '../redux/authSlice';
import { useLocation } from 'react-router-dom';
import { RiSettings5Line } from "react-icons/ri";



const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: '10px',
    paddingRight: '10px',
    marginBottom: '0px !important',
    height: "69.09px",
    maxHeight: "69.09px",
    position: 'relative',
    // display: `${token ? "block" : 'none'}`,
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xs) - 1)})`]: {
      // backgroundColor: theme.colors.pink[6],
      width: '100%',
      margin: 0
    },
  },

  inner: {
    height: "69.09px",
    marginLeft: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none'
    },
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]: {
      // backgroundColor: theme.colors.pink[6],
      width: '50%',
      margin: 0
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));




export function Navbar() {
    const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [key,setKey] = useState();
  const [modalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false);
  const { classes } = useStyles();
  // side(opened); 
  const sideSelector = useSelector(state => state.side.side);
  const path = useLocation();
  const dispatch = useDispatch();

  const authToken = useSelector(state => state.authSlice.token);
  const token = Cookies.get('token');
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
    }, [authToken])

    console.log(token);
    useEffect(() => {
      dispatch(sideToggler());
    },[opened])

  return (
    // <button onClick={() => dispatch(toggle())}>Dis</button>
    <Header height={59} className={`${token && path.pathname !== "/signin" && path.pathname !== '/signup' ? (`${'px-[10px] h-[69.09px] max-h-[69.09px] !mb-0 relative block'}`) : 'hidden'}`} mb={120}>
      <div className={classes.inner}>
        <Group mr={30} spacing={3}>
            <div className=' flex items-center gap-2 md:gap-5'>
            <div>
            <Burger opened={sideSelector} onClick={toggle} size="md" />
          </div>
          <Autocomplete
            
            className={classes.search}
            placeholder="Search project..."
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
          {/* <MantineLogo size={28} /> */}
          <Button rightIcon={<AiOutlineDown/>}
            styles={(theme) => ({
              root: {
                backgroundColor: '#00acee',
                border: 0,
                height: rem(42),
                fontSize: '10px',
                '&:not([data-disabled])': theme.fn.hover({
                  backgroundColor: "#fff",
                }),
              }
            })}
  
          onClick={modalOpen} size='sm' className=' text-black flex items-start gap-5'>Mega Menu</Button>
            </div>
        </Group>

        <Modal
          overlayProps={{
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                  opacity: 0.124,
                  blur: 0,
                  height: '200px !important'
                }}
         yOffset={'12vh'}       
        opened={modalOpened} onClose={modalClose} title="">
            
            <table className=' text-xs table-fixed h-full !m-0'>
                <thead>
                  <tr>
                    <th className=' pe-10 h-10'>UI Elements</th>
                    <th className=' pe-10 h-10'>Forms</th>
                    <th className=' pe-10 h-10'>Tables</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '10px' }}>
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
        </Modal>

        <Group mr={30} spacing={5} className=' min-w-[150px]' >
          {/* <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group> */}
          <div className=' flex items-center gap-1 md:gap-2 me-5 md:me-0'>
          <div className=' relative'>
            <TbMessageCircle2 size={18}/>
            <span style={{ fontSize: '7px' }} className=' w-3 h-3 text-white bg-blue-400 rounded absolute -top-1 right-0 font-thin flex items-center justify-center'><p>4</p></span>
          </div>

          <div>
            <MdOutlineNotificationsOff size={18}/>
          </div>

          <div className=' w-4 h-4 rounded-full overflow-hidden bg-cover bg-fixed'>
            <img className=' h-full' src="https://appstack.bootlab.io/img/flags/us.png" alt="" />
          </div>

          <div className=' ps-10 block md:hidden'>
            <RiSettings5Line size={20}/>
          </div>

          <div className=' hidden md:block'>
          <Button 
            leftIcon={<div className=' w-5 h-5 rounded-full overflow-hidden bg-cover bg-fixed'>
                        <img className=' h-full' src="https://appstack.bootlab.io/img/avatars/avatar.jpg" alt="" />
                      </div>}
            rightIcon={<AiOutlineDown/>}
            classNames=" me-5"
            styles={(theme) => ({
              root: {
                width: '130px',
                backgroundColor: '#00acee',
                border: 0,
                height: rem(42),
                paddingLeft: rem(10),
                paddingRight: rem(10),
                fontSize: '10px',
                '&:not([data-disabled])': theme.fn.hover({
                  backgroundColor: "#fff",
                }),
              }
            })}
  
          onClick={modalOpen} size='sm' className=' text-black flex items-start gap-5'>Mega Menu</Button>
          </div>
          </div>

        </Group>
      </div>
    </Header>
  );
}