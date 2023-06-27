# CIRCLE ECONOMY DESIGN SYSTEM

1. CEDS is a design system package made for Circle Economy projects. We utilize this package to share application logic between other projects.

2. Branch Management Strategy on GitLab repo:

   - main
     - The main branch should be aligned with the production environment, we usually merged into main immediately before a production deploy.
   - dev
     - The dev branch should be branched off of for new feature requests and bugfixes.
     - We try to follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification for branch naming (ie, feat/fix).
   - sprint[tag][1]
     - When working on larger features we utilize the sprint branch instead of development, this helps to free up the development branch for smaller tasks that may come through in the meantime.

## Development

1. Clone the repo:

   ```sh
   git clone https://gitlab.com/circleeconomy/honey-jungle/front-end/ceds.git
   cd ceds
   ```

2. Make sure you are using node version `16.4.1`

## Deployment

1. After making changes and changing the package.json version, first commit your work. When are you ready to push the update to GitLab run `npm run build` & `npm run publish`

2. On the External project repo, update the version for CEDS in the package.json, run `npm run install` and then commit the package update.

## Usage

```bash
npm install @circleeconomy/ceds
```

```jsx
import { Icon } from '@circleeconomy/ceds';
ReactDOM.render(<Icon name='search' />, mountNode);
```
