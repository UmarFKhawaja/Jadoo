import { createBrowserRouter } from 'react-router-dom';
import { config } from '../config';
import {
  BrowseSolutionsFeature,
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
import {
  ApolloLayout,
  BrowseLayout,
  ManageLayout,
  RootLayout
} from '../layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '',
        element: <ViewHomeFeature/>
      },
      {
        path: 'sign-in',
        element: <SignInFeature config={config}/>
      },
      {
        path: 'sign-up',
        element: <SignUpFeature config={config}/>
      },
      {
        path: '',
        element: <ApolloLayout/>,
        children: [
          {
            path: 'manage',
            element: <ManageLayout/>,
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
            path: 'create/solution',
            element: <CreateSolutionFeature/>
          },
          {
            path: 'browse',
            element: <BrowseLayout/>,
            children: [
              {
                path: 'solutions',
                element: <BrowseSolutionsFeature/>
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
        ]
      }
    ]
  }
]);
