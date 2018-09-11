import React from 'react';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
