import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, InputBase, Box, Typography, Badge, Button } from '@mui/material';
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import giftimage from './images/image1.png';

function DashboardHeader() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 2, borderColor: '#E4EAEE' }}>
      <Toolbar sx={{ justifyContent: 'space-between', display: 'flex', flexWrap: 'nowrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '20px', marginRight: 1 }}>
            Actions
          </Typography>
          <Badge
            badgeContent={16}
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '16px',
                width: 30,
                height: 30,
                borderRadius: 5,
                minWidth: 'unset',
                backgroundColor: '#000',
                color: '#fff',
                right: -11,
              },
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', marginX: 2 }}>
          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={<Search />}
            sx={{
              bgcolor: '#f1f3f4',
              borderRadius: 1,
              px: 1,
              width: '100%',
              maxWidth: 400,
              height: 40,
              fontStyle: 'italic',
              flexGrow: 1,
              minWidth: 0,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
          <Button
            variant="contained"
            color="inherit"
            sx={{
              textTransform: 'none',
              marginRight: 2,
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid #ddd',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            endIcon={<ArrowDropDown />}
          >
            Add New
          </Button>

          <IconButton aria-label="gift">
            <img src={giftimage} alt="Gift Icon" style={{ width: 24, height: 24 }} />
          </IconButton>

          <IconButton aria-label="notifications">
            <Notifications />
          </IconButton>

          <IconButton>
            <Avatar
              src="https://mui.com/static/images/avatar/2.jpg"
              alt="User Avatar"
              sx={{ borderRadius: 3.5 }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function DashboardLayout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'fixed',
      }}
    >
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        <DashboardHeader />
        <Box p={3} sx={{ flexGrow: 1 }}>
        </Box>
      </div>
    </div>
  );
}

export default DashboardLayout;