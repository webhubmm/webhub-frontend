"use client"

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    InboxIcon,
  } from "@heroicons/react/24/solid";

  import { SidebarContext } from '../../contexts/AdminSidebarContext';
  import { useContext } from 'react';
import Link from "next/link";
   
  export default function AdminSidebar() {

  const { state, dispatch } = useContext(SidebarContext);

    return (
      <Card className={`sticky top-0 left-0 h-screen w-full rounded-none shadow-none border border-collapse border-gray-700 transition duration-500`}>
        <div className="mb-2 p-4">
          <Typography variant="h5">
            Webhub
          </Typography>
        </div>
        <List>
          <Link href={'/dashboard'}>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link href='/dashboard/blogs'>
            <ListItem>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Blogs
            </ListItem>
          </Link>
          <Link href='/dashboard/categories'>
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Categories
            </ListItem>
          </Link>
        </List>
      </Card>
    );
  }