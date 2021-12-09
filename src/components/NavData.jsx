import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as GoIcons from 'react-icons/go';
import * as BiIcons from 'react-icons/bi'

export const NavData = [
    {
        title: "Home",
        path: "/",
        icon: <BiIcons.BiHomeHeart />,
        cName: "menu-text",
    },
    {
        title: "About",
        path: "/about",
        icon: <BsIcons.BsInfoCircle />,
        cName: "menu-text",
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <GoIcons.GoMail />,
        cName: "menu-text",
    },
    {
        title: "Events",
        path: "/events",
        icon: < BsIcons.BsCalendarEvent />,
        cName: "menu-text",
    },
]