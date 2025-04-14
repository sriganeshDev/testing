import { useLocation, Link } from "react-router-dom";
import { Container, Typography, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

// Icon mapping
const iconMap = {
  Home: <HomeIcon fontSize="medium" />,
  About: <InfoIcon fontSize="medium" />,
};

// Route mapping
const routeMap = {
  Home: "/home",
  About: "/about",
};

const BottomNav = ({ pages }) => {
  const location = useLocation();

  return (
    <Container className="bg-white border-0 shadow-white fixed bottom-0 w-full z-50 py-2">
      <div className="lg:hidden flex flex-row justify-around items-center">
        {pages.map((page) => {
          const isActive = location.pathname === routeMap[page];

          return (
            <Link
              key={page}
              to={routeMap[page]}
              className="flex flex-col items-center no-underline text-black"
            >
              <MenuItem>
                {iconMap[page]}
              </MenuItem>
              {isActive && (
                <Typography sx={{ fontSize: "0.75rem" }}>{page}</Typography>
              )}
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default BottomNav;
