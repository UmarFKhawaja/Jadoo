import { createBrowserRouter } from 'react-router-dom';
import { CreateSolutionFeature } from '@jadoo/create-solution-feature';
import { ManageOverviewFeature } from '@jadoo/manage-overview-feature';
import { ManageProfileFeature } from '@jadoo/manage-profile-feature';
import { ManageSettingsFeature } from '@jadoo/manage-settings-feature';
import { ManageSolutionsFeature } from '@jadoo/manage-solutions-feature';
import { ShowPlaceholderFeature } from '@jadoo/show-placeholder-feature';
import { SignInFeature } from '@jadoo/sign-in-feature';
import { SignUpFeature } from '@jadoo/sign-up-feature';
import { ViewHomeFeature } from '@jadoo/view-home-feature';
import { config } from '../config';
import {
  BrowseElement,
  BrowseSolutionsElement,
  ManageElement
} from '../elements';

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
