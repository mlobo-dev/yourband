import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { disableRightSidebar } from "../../redux/actions/sidebarActions";

import Dashboard from "../dashboards/Default";

const SidebarLeft = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(disableRightSidebar());
  }, [dispatch])

  return <Dashboard />
}

export default SidebarLeft;
