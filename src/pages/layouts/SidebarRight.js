import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableRightSidebar, disableRightSidebar } from "../../redux/actions/sidebarActions";

import Dashboard from "../dashboards/Default";

const SidebarRight = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableRightSidebar());

    return () => {
      dispatch(disableRightSidebar());
    }
  }, [dispatch])

  return <Dashboard />
}

export default SidebarRight;
