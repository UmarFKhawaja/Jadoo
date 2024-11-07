import { createBrowserRouter } from 'react-router-dom';
import { config } from '../config';
import {
  BrowseElement,
  BrowseSolutionsElement,
  ManageElement
} from '../elements';
import {
  CreateSolutionFeature,
  ManageOverviewFeature,
  ManageProfileFeature,
  ManageSettingsFeature,
  ManageSolutionsFeature,
  ShowPlaceholderFeature,
  SignInFeature,
  SignUpFeature,
  ViewHomeFeature
} from '../features';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ViewHomeFeature/>
  },
  {
    path: '/sign-in',
    element: <SignInFeature config={config}/>
  },
  {
    path: '/sign-up',
    element: <SignUpFeature config={config}/>
  },
  {
    path: '/manage',
    element: <ManageElement/>,
    children: [
      {
        path: '',
        element: <ManageOverviewFeature/>
      },
      {
        path: 'solutions',
        element: <ManageSolutionsFeature/>
      },
      {
        path: 'profile',
        element: <ManageProfileFeature/>
      },
      {
        path: 'settings',
        element: <ManageSettingsFeature/>
      }
    ]
  },
  {
    path: '/create/solution',
    element: <CreateSolutionFeature/>
  },
  {
    path: '/browse',
    element: <BrowseElement/>,
    children: [
      {
        path: 'solutions',
        element: <BrowseSolutionsElement/>
      },
      {
        path: 'features',
        element: <ShowPlaceholderFeature/>,
        children: [
          {
            path: 'share-progress',
            element: <ShowPlaceholderFeature/>
          },
          {
            path: 'enjoy-variety',
            element: <ShowPlaceholderFeature/>
          },
          {
            path: 'track-meals',
            element: <ShowPlaceholderFeature/>
          },
          {
            path: 'inform-choices',
            element: <ShowPlaceholderFeature/>
          },
          {
            path: 'set-goals',
            element: <ShowPlaceholderFeature/>
          },
          {
            path: 'socialize-securely',
            element: <ShowPlaceholderFeature/>
          }
        ]
      },
      {
        path: 'tutorials',
        element: <ShowPlaceholderFeature/>
      },
      {
        path: 'techniques',
        element: <ShowPlaceholderFeature/>
      }
    ]
  }
]);
