/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Routine from "@material-ui/icons/History";
import Calendar from "@material-ui/icons/Today";
import Challenge from "@material-ui/icons/Flag";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/routine",
    name: "Routine",
    icon: Routine,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: Calendar,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/challenge",
    name: "Challenge",
    icon: Challenge,
    component: TableList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
