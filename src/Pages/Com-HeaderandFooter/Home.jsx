import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { RiHome2Line } from 'react-icons/ri';
import { LuPackage } from 'react-icons/lu';
import { BiDish } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { useLocation, Link, Outlet } from 'react-router-dom';

const iconMap = {
  Home: <RiHome2Line size={23} />,
  Dish: <BiDish size={23} />,
  Parcel: <LuPackage size={23} />,
  User: <FiUser size={23} />,
  Setting: <AiOutlineSetting size={23} />,
};

const routeMap = {
  Home: '/home/admindashboard',
  Dish: '/home/userDashboard',
  Parcel: '/parcel',
  User: '/user',
  Setting: '/setting',
};

function CommonMenu() {
  const location = useLocation();
  const pages = ['Home', 'Dish', 'Parcel', 'User', 'Setting'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar>
        <Container maxWidth="xxl" className="bg-white border-0 shadow-white z-50 h-[20%]">
          <Toolbar disableGutters>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
            <div className="flex flex-col pl-3 text-black">
              <p className="text-sm">Welcome, admin!</p>
              <p className="font-bold">Andrew</p>
            </div>


           
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center', color: '#000' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2%',
              }}
              className="hidden lg:flex"
            >
              {pages.map((page) => {
                const isActive = location.pathname.startsWith(routeMap[page]);
                return (
                  <Link key={page} to={routeMap[page]}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        fontWeight: 'bold',
                        px: 3,
                        borderRadius: 2,
                        textTransform: 'none',
                        color: isActive ? 'white' : 'black',
                        backgroundColor: isActive ? '#4caf50' : 'transparent',
                        '&:hover': {
                          backgroundColor: isActive ? '#4caf50' : 'rgba(0,0,0,0.04)',
                        },
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                );
              })}
            </Box>

            {/* Avatar & icons */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <div className="flex flex-row justify-between items-center pt-5 gap-3">
                  <CiSearch className="text-2xl text-black" />
                  <Badge badgeContent={21} color="error">
                    <NotificationsIcon sx={{ color: 'rgba(66, 106, 179, 1)', fontSize: 30 }} />
                  </Badge>
                </div>
              </Tooltip>

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}></IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Page content */}
      <div className="pt-[80px] min-h-screen bg-white">
        <Outlet />
      </div>

      {/* Bottom Nav for mobile screen */}
      <Container className="bg-white lg:hidden fixed bottom-0 w-full z-50 pt-4 h-[10%]">
        <div className="flex flex-row justify-around items-center">
          {pages.map((page) => {
            const isActive = location.pathname.startsWith(routeMap[page]);
            return (
              <Link
                key={page}
                to={routeMap[page]}
                className={`flex flex-row items-center no-underline h-[35px] w-[140px] p-2 rounded-2xl transition-all ${
                  isActive ? 'bg-green-500 text-white' : 'bg-transparent text-black'
                }`}
              >
                <MenuItem sx={{ color: isActive ? 'white' : 'black', paddingLeft: '2px' }}>
                  {iconMap[page]}
                </MenuItem>
                {isActive && (
                  <Typography
                    sx={{ fontSize: '0.85rem', color: 'white', fontWeight: 'bold' }}
                  >
                    {page}
                  </Typography>
                )}
              </Link>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default CommonMenu;
