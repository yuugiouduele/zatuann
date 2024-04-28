import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'デイトレ日記', url: '#' },
  { title: '株日記', url: '#' },
  { title: 'FX日記', url: '#' },
  { title: 'CFD日記', url: '#' },
  { title: '債権投資講座', url: '#' },
  { title: '有名投資家雑談会', url: '#' },
  { title: '日記連携', url: '#' },
  { title: '投稿', url: '#' },
  { title: 'ランキング', url: '#' },
  { title: 'ヘルプ', url: '#' },
];



const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'メルカリのパクリ',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export  function Ecsite() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="何とかショップ" sections={sections} />
        <main>
          
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            
          </Grid>
        </main>
      </Container>
      <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              footer={<Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
              />}
            />
      
    </ThemeProvider>
  );
}
