import { UserAndPost } from '../shared/types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import CardHeader from '@material-ui/core/CardHeader';

const PostItem: React.FC<{ item: UserAndPost }> = ({ item }) => {
  const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    & > * {
      margin: 4px;
    }
  `;
  const AvatarLabel = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ borderRadius: '10%', margin: '25px', height: '400px' }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/id/${item.id}/300/200`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
          {item.category.toLocaleUpperCase()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          Pubblicato il: {item.date}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar
            alt={item.authorName}
            src={`https://randomuser.me/api/portraits/men/${item.userId}.jpg`}
          />
        }
        title={item.authorName}
      />
    </Card>
  );
};

export default PostItem;
