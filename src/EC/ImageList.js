import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



function Data(i,{image}){
  let data=[{image}];
  for(let d=0;d<i;d++){
    data[d]=[{image}
    ]; 
  }
  return data;
}

const itemData = Data(100,{
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: 'Breakfast',
  width:'30%',
});



export default function StandardImageList() {
  return (
   
    <ImageList sx={{ width: 1200, height: 1300 }} cols={5} rowHeight={320} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
           
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}