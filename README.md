# Applitools Tutorial - Storybook React

Get started with Applitools Eyes visual testing with this example of using [Storybook](https://storybook.js.org/) and the [Eyes Storybook SDK](https://applitools.com/tutorials/sdks/storybook).

Learn more about how to install and start this project with our [Storybook React tutorial](https://applitools.com/tutorials/sdks/storybook)!

_If you're looking for the CSF format for creating Storybook stories, check out the [Storybook CSF React tutorial](https://github.com/applitools/tutorial-storybook-csf-react)._

# Installation & Run
1. Install the dependencies
    ```sh
    npm install
    ```

To authenticate via the Applitools server and run tests, you need to set your API key provided from Applitools Eyes. For details on how to retrieve your API key, see [the Applitools documentation](https://applitools.com/tutorials/getting-started/retrieve-api-key).

2. Choose one of the following options to set your API Key.
    * Set your Applitools API Key as an environment variable. 
        * macOS/Linux: `export APPLITOOLS_API_KEY=<Your API Key>`
        * Windows: `set APPLITOOLS_API_KEY=<Your API Key>`
        
    * Set your Applitools API Key inside the **applitools.config.js** file via the `apiKey` setting.
        * Note: If you are not using the Eyes public cloud, you will need to update the `serverUrl` to your Eyes server URL in the **applitools.config.js** configuration file.

3. Run the example test
    ```sh
    npx eyes-storybook
    ```

4. After the example tests complete. Visit your Applitools Eyes dashboard to view the results.

## More Information

Learn more about [Applitools Eyes](https://www.applitools.com) and the [Applitool Ultrafast Grid](https://applitools.com/platform/ultrafast-grid).

More about the Eyes Storybook SDK:
* https://www.npmjs.com/package/@applitools/eyes-storybook
