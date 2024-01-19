# Test task for LendFusion

## What was done

### Features

- **User List**: Displays a list of users fetched from JSONPlaceholder.
- **User Details**: Clicking on a user in the list displays detailed information about that user.
- **Search Box**: A search box allows users to filter the list based on user names.
- **Adding a User**: When clicking "Add user", the form appears in form of a Dialog. Unfortunately, JSONPlaceholder does not save users on the server, so this is only simulated in the list view. However, the 404 error is handled when clicking on the user.
- **Updating a User**: In **User Details** view, when clicking on a value, it becomes editable. The PUT request is sent when pressing Enter or leaving the field. The value is updated in the global state.
- **Deleting a User**: In the **User List** view, when clicking **Delete**, a confirmation dialog appears. Upon confirming, the user gets deleted. JSONPlaceholder does not do this on the server, but the global state gets updated, simulating the expected behavior.

### Implementation

- **React**: Used for building the user interface.
- **RTK Query**: Utilized for efficient server state management in Redux, handling the data fetching, caching, and synchronization logic.
- **CSS Modules**: Adopted for styling components in a modular and reusable way.

## Demo
The demo is accessible by following this link: https://hotnutella.github.io/lendfusion-react/


## Running on a local machine

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository**
   ```bash
   git clone git@github.com:hotnutella/lendfusion-react.git
   cd lendfusion-react
   ``````

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Start the Development Server**
    ```bash
    npm start
    ```
    This command runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

