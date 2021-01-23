import async from '../components/Async';

import {
  faBook,
  faChartPie,
  faCheckSquare,
  faDesktop,
  faFile,
  faFlask,
  faHeart,
  faHome,
  faMapMarkerAlt,
  faTable,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

// Landing
import Landing from '../pages/landing/Landing';

// Auth
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ResetPassword from '../pages/auth/ResetPassword';
import Page404 from '../pages/auth/Page404';
import Page500 from '../pages/auth/Page500';

// Layouts
import SidebarLeft from '../pages/layouts/SidebarLeft';
import SidebarRight from '../pages/layouts/SidebarRight';
import ThemeModern from '../pages/layouts/ThemeModern';
import ThemeClassic from '../pages/layouts/ThemeClassic';
import ThemeDark from '../pages/layouts/ThemeDark';
import ThemeLight from '../pages/layouts/ThemeLight';

// Misc
import Blank from '../pages/misc/Blank';

// UI Elements
import Alerts from '../pages/ui-elements/Alerts';
import Buttons from '../pages/ui-elements/Buttons';
import Cards from '../pages/ui-elements/Cards';
import General from '../pages/ui-elements/General';
import Grid from '../pages/ui-elements/Grid';
import Modals from '../pages/ui-elements/Modals';
import Notifications from '../pages/ui-elements/Notifications';
import Tabs from '../pages/ui-elements/Tabs';
import Typography from '../pages/ui-elements/Typography';

// Pages
const Settings = async(() => import('../pages/pages/Settings'));
const Clients = async(() => import('../pages/pages/Clients'));
const Invoice = async(() => import('../pages/pages/Invoice'));
const Pricing = async(() => import('../pages/pages/Pricing'));
const Tasks = async(() => import('../pages/pages/Tasks'));
const Chat = async(() => import('../pages/pages/Chat'));

// Documentation
const GettingStarted = async(() => import('../pages/docs/GettingStarted'));
const Plugins = async(() => import('../pages/docs/Plugins'));
const Changelog = async(() => import('../pages/docs/Changelog'));

// Dashboards
const Default = async(() => import('../pages/dashboards/Default'));

// Forms
const Layouts = async(() => import('../pages/forms/Layouts'));
const BasicElements = async(() => import('../pages/forms/BasicElements'));
const AdvancedElements = async(() => import('../pages/forms/AdvancedElements'));
const InputGroups = async(() => import('../pages/forms/InputGroups'));
const Editors = async(() => import('../pages/forms/Editors'));
const Validation = async(() => import('../pages/forms/Validation'));

// Tables
const BootstrapTables = async(() => import('../pages/tables/Bootstrap'));
const AdvancedTables = async(() => import('../pages/tables/Advanced'));

// Charts
const Chartjs = async(() => import('../pages/charts/Chartjs'));
const ApexCharts = async(() => import('../pages/charts/ApexCharts'));

// Icons
const FontAwesome = async(() => import('../pages/icons/FontAwesome'));
const IonIcons = async(() => import('../pages/icons/IonIcons'));
const Feather = async(() => import('../pages/icons/Feather'));

// Calendar
const Calendar = async(() => import('../pages/calendar/Calendar'));

// Maps
const VectorMaps = async(() => import('../pages/maps/VectorMaps'));
const GoogleMaps = async(() => import('../pages/maps/GoogleMaps'));

// Routes
const landingRoutes = {
  path: '/',
  name: 'Landing Page',
  component: Landing,
  children: null,
};

const dashboardRoutes = {
  path: '/dashboard',
  name: 'Dashboard',
  header: 'Main',
  icon: faHome,
  component: Default,
  children: null,
};

const layoutRoutes = {
  path: '/layouts',
  name: 'Layouts',
  icon: faDesktop,
  children: [
    {
      path: '/layouts/sidebar-left',
      name: 'Left Sidebar',
      component: SidebarLeft,
    },
    {
      path: '/layouts/sidebar-right',
      name: 'Right Sidebar',
      component: SidebarRight,
    },
    {
      path: '/layouts/theme-modern',
      name: 'Modern Theme',
      component: ThemeModern,
    },
    {
      path: '/layouts/theme-classic',
      name: 'Classic Theme',
      component: ThemeClassic,
    },
    {
      path: '/layouts/theme-dark',
      name: 'Dark Theme',
      component: ThemeDark,
    },
    {
      path: '/layouts/theme-light',
      name: 'Light Theme',
      component: ThemeLight,
    },
  ],
};

const uiRoutes = {
  path: '/ui',
  name: 'User Interface editado',
  header: 'Elements',
  icon: faFlask,
  children: [
    {
      path: '/ui/alerts',
      name: 'Alerts',
      component: Alerts,
    },
    {
      path: '/ui/buttons',
      name: 'Buttons',
      component: Buttons,
    },
    {
      path: '/ui/cards',
      name: 'Cards',
      component: Cards,
    },
    {
      path: '/ui/general',
      name: 'General',
      component: General,
    },
    {
      path: '/ui/grid',
      name: 'Grid',
      component: Grid,
    },
    {
      path: '/ui/modals',
      name: 'Modals',
      component: Modals,
    },
    {
      path: '/ui/notifications',
      name: 'Notifications',
      component: Notifications,
    },
    {
      path: '/ui/tabs',
      name: 'Tabs',
      component: Tabs,
    },
    {
      path: '/ui/typography',
      name: 'Typography',
      component: Typography,
    },
  ],
};

const chartRoutes = {
  path: '/charts',
  name: 'Charts',
  icon: faChartPie,
  badgeColor: 'primary',
  badgeText: 'New',
  children: [
    {
      path: '/charts/chartjs',
      name: 'Chart.js',
      component: Chartjs,
    },
    {
      path: '/charts/apexcharts',
      name: 'ApexCharts',
      component: ApexCharts,
    },
  ],
};

const formRoutes = {
  path: '/forms',
  name: 'Forms',
  icon: faCheckSquare,
  children: [
    {
      path: '/forms/layouts',
      name: 'Layouts',
      component: Layouts,
    },
    {
      path: '/forms/basic-elements',
      name: 'Basic Elements',
      component: BasicElements,
    },
    {
      path: '/forms/advanced-elements',
      name: 'Advanced Elements',
      component: AdvancedElements,
    },
    {
      path: '/forms/input-groups',
      name: 'Input Groups',
      component: InputGroups,
    },
    {
      path: '/forms/editors',
      name: 'Editors',
      component: Editors,
    },
    {
      path: '/forms/validation',
      name: 'Validation',
      component: Validation,
    },
  ],
};

const tableRoutes = {
  path: '/tables',
  name: 'Tables',
  icon: faTable,
  children: [
    {
      path: '/tables/bootstrap',
      name: 'Bootstrap',
      component: BootstrapTables,
    },
    {
      path: '/tables/advanced-tables',
      name: 'Advanced',
      component: AdvancedTables,
    },
  ],
};

const iconRoutes = {
  path: '/icons',
  name: 'Icons',
  icon: faHeart,
  children: [
    {
      path: '/icons/feather',
      name: 'Feather',
      component: Feather,
    },
    {
      path: '/icons/ion-icons',
      name: 'Ion Icons',
      component: IonIcons,
    },
    {
      path: '/icons/font-awesome',
      name: 'Font Awesome',
      component: FontAwesome,
    },
  ],
};

const calendarRoutes = {
  path: '/calendar',
  name: 'Calendar',
  icon: faCalendarAlt,
  component: Calendar,
  children: null,
};

const mapRoutes = {
  path: '/maps',
  name: 'Maps',
  icon: faMapMarkerAlt,
  children: [
    {
      path: '/maps/google-maps',
      name: 'Google Maps',
      component: GoogleMaps,
    },
    {
      path: '/maps/vector-maps',
      name: 'Vector Maps',
      component: VectorMaps,
    },
  ],
};

const pageRoutes = {
  path: '/pages',
  name: 'Pages',
  icon: faFile,
  children: [
    {
      path: '/pages/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/pages/clients',
      name: 'Clients',
      component: Clients,
      badgeColor: 'primary',
      badgeText: 'New',
    },
    {
      path: '/pages/invoice',
      name: 'Invoice',
      component: Invoice,
    },
    {
      path: '/pages/pricing',
      name: 'Pricing',
      component: Pricing,
    },
    {
      path: '/pages/tasks',
      name: 'Tasks',
      component: Tasks,
    },
    {
      path: '/pages/chat',
      name: 'Chat',
      component: Chat,
      badgeColor: 'primary',
      badgeText: 'New',
    },
    {
      path: '/pages/blank',
      name: 'Blank Page',
      component: Blank,
    },
  ],
};

const authRoutes = {
  path: '/auth',
  name: 'Auth',
  icon: faSignInAlt,
  children: [
    {
      path: '/auth/sign-in',
      name: 'Sign In',
      component: SignIn,
    },
    {
      path: '/auth/sign-up',
      name: 'Sign Up',
      component: SignUp,
    },
    {
      path: '/auth/reset-password',
      name: 'Reset Password',
      component: ResetPassword,
    },
    {
      path: '/auth/404',
      name: '404 Page',
      component: Page404,
    },
    {
      path: '/auth/500',
      name: '500 Page',
      component: Page500,
    },
  ],
};

const documentationRoutes = {
  path: '/docs',
  name: 'Documentation',
  icon: faBook,
  children: [
    {
      path: '/docs/getting-started',
      name: 'Getting Started',
      component: GettingStarted,
    },
    {
      path: '/docs/plugins',
      name: 'Plugins',
      component: Plugins,
    },
    {
      path: '/docs/changelog',
      name: 'Changelog',
      component: Changelog,
    },
  ],
};

// This route is not visisble in the sidebar
const privateRoutes = {
  path: '/private',
  name: 'Private',
  children: [
    {
      path: '/private/blank',
      name: 'Blank Page',
      component: Blank,
    },
  ],
};

// Dashboard specific routes
export const dashboard = [
  dashboardRoutes,
  layoutRoutes,
  uiRoutes,
  chartRoutes,
  formRoutes,
  tableRoutes,
  iconRoutes,
  calendarRoutes,
  mapRoutes,
  pageRoutes,
  documentationRoutes,
  privateRoutes,
];

// Landing specific routes
export const landing = [landingRoutes];

// Auth specific routes
export const page = [authRoutes];

// All routes
export default [
  dashboardRoutes,
  pageRoutes,
  authRoutes,
  uiRoutes,
  chartRoutes,
  formRoutes,
  tableRoutes,
  iconRoutes,
  calendarRoutes,
  mapRoutes,
  documentationRoutes,
  layoutRoutes,
];
