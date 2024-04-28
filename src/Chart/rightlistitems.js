import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


export const subListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="アカウント設定" />
    </ListItemButton>
    <ListItemButton href="/#">
      <ListItemIcon>
        <SwapHorizIcon />
      </ListItemIcon>
      <ListItemText primary="取引制限" />
    </ListItemButton>
    <ListItemButton href="/#">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="詳細設定" />
    </ListItemButton>
    <ListItemButton href="/#">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="パスワード設定" />
    </ListItemButton>
    <ListItemButton href="/#">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="メールアドレス設定" />
    </ListItemButton>
    <ListItemButton href="/#">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="ブログ設定" />
    </ListItemButton>
    <ListItemButton href="/#">
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="クレカ情報" />
    </ListItemButton>
    <ListItemButton href="/#">
      <ListItemIcon>
        <SupportAgentIcon />
      </ListItemIcon>
      <ListItemText primary="ヘルプ" />
    </ListItemButton>
  </React.Fragment>
);



