import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableDarkTheme } from "../../redux/actions/themeActions";

import Dashboard from "../dashboards/Default";

const ThemeDark = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableDarkTheme());
  }, [dispatch])

  return <Dashboard />
}

export default ThemeDark;
