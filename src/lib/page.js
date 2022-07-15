import { authPageData, panelPageData } from "../config/page";

export const getAuthPageData = pathname => authPageData[pathname]

export const getPanelPageData = pathname => panelPageData[pathname]