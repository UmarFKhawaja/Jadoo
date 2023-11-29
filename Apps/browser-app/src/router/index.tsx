import { createBrowserRouter } from 'react-router-dom';
import {
  BrowseElement,
  BrowseSolutionsElement,
  CreateSolutionElement,
  ManageElement,
  ManageOverviewElement,
  ManagePlansElement,
  ManageProfileElement,
  ManageSolutionsElement,
  ManageSettingsElement,
  ShowPlaceholderElement,
  SignInElement,
  SignUpElement,
  ViewHomeElement
} from '../elements';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ViewHomeElement/>
  },
  {
    path: '/sign-in',
    element: <SignInElement/>
  },
  {
    path: '/sign-up',
    element: <SignUpElement/>
  },
  {
    path: '/manage',
    element: <ManageElement/>,
    children: [
      {
        path: '',
        element: <ManageOverviewElement/>
      },
      {
        path: 'plans',
        element: <ManagePlansElement/>
      },
      {
        path: 'solutions',
        element: <ManageSolutionsElement/>
      },
      {
        path: 'profile',
        element: <ManageProfileElement/>
      },
      {
        path: 'settings',
        element: <ManageSettingsElement/>
      }
    ]
  },
  {
    path: '/create/solution',
    element: <CreateSolutionElement/>
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
        element: <ShowPlaceholderElement/>,
        children: [
          {
            path: 'share-progress',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'enjoy-variety',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'track-meals',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'inform-choices',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'set-goals',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'socialize-securely',
            element: <ShowPlaceholderElement/>
          }
        ]
      },
      {
        path: 'tutorials',
        element: <ShowPlaceholderElement/>
      },
      {
        path: 'techniques',
        element: <ShowPlaceholderElement/>
      }
    ]
  }
]);
