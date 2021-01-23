import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableLightTheme } from "../../redux/actions/themeActions";

import Dashboard from "../dashboards/Default";

const ThemeLight = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableLightTheme());
  }, [dispatch])

  return <Dashboard />
}

export default ThemeLight;
