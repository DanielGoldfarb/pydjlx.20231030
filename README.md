# PyData JupyterLab Extension Tutorial Steps in Detail:
## First, [For Step 0, follow the detailed sub-steps below](https://github.com/DanielGoldfarb/pydjlx/tree/main#step-0-copier-extension-template-basic-do-nothing-extension).
## Next, for each of Steps 1 through 7:
### 1. Make the [**code change indicated in the Code Changes section**](https://github.com/DanielGoldfarb/pydjlx/tree/main#code-changes).
### 2. **`jlpm run build`**
### 3. Refresh browser, and test.

---

## Step 0: Copier Extension Template (basic do-nothing extension)
1. ```bash
   # create the conda environment
   conda create -n jlx --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=4 nodejs=18 git copier=7 jinja2-time
    ```
2. ```bash
   # activate the conda environment:
   conda activate jlx
   ```
3. ```bash
   # copier copy <template> <destination>
   copier copy https://github.com/jupyterlab/extension-template pydjlx   
   ```
4. ```bash
   # cd into the project directory
   cd pydjlx

   # take a look at the files that were created by the copier template:
   ls -l  
   ```
5. ```bash
   # optionally create a git repository for the extension package:
   git init
   git add .
   git commit -m 'step0: template extension'
   ```
6. ```bash
   # install our extension's dependencies so that we can build the extension:
   jlpm install

   # confirm that yarn.lock and node_modules were created:
   ls -ltr 
   ```
7. ```bash
   # build the extension
   jlpm run build
   # Did the build end with "... compiled successfully in ... ms"?
   ```
8. ```bash
   # list currently installed extensions:
   jupyter labextension list
   # note that the above out also shows the directory where the isntalled extensions were found.
9. ```bash
   # install our extension as a symbolic link:
   jupyter labextension develop --overwrite ./

   # confirm the install:
   jupyter labextension list
10. ```bash
    # Open another command/linux window, 
    # activate our conda environment, and run jupyter lab:

    conda activate jlx
    jupyter lab
    ```
11. **Confirm that you see "Jupyterlab extension pydjlx is activated!"**  
    1. In the browser window where JupyterLab is running, ***open the browser console***
    2. In Chrome, the console is under "More Tools" --> "Developer Tools".
    3. Confirm that you see **"Jupyterlab extension pydjlx is activated!"**  
   
## Code Changes:
* [**Step1 :** Create a command in the command registry](https://github.com/DanielGoldfarb/pydjlx/commit/a3b1aa4a90cec0fa19dc2fb255172eb994e7f422)
* [**Step2 :** Execute command from ICommandPalette](https://github.com/DanielGoldfarb/pydjlx/commit/e829768f405d4e0131b910a2485c2c567da8ca02)
* [**Step3a:** Split out activate function](https://github.com/DanielGoldfarb/pydjlx/commit/37feb953cb667bc93f07cf0981e0eb492a5c1bd0)
* [**Step3b:** Add widget to main area](https://github.com/DanielGoldfarb/pydjlx/commit/f6a4a3f1c703229f8f9df7952e225546a6a7817c)
* [**Step4 :** Style the widget](https://github.com/DanielGoldfarb/pydjlx/commit/1ee560aa172316431fa009079c0acce13dd07247)
* [**Step5a:** Execute command from the Launcher](https://github.com/DanielGoldfarb/pydjlx/commit/0d8f30e0ce97c9b523ead9c07f2859315cc52a97)
* [**Step5b:** `jlpm add @jupyterlab/launcher`](https://github.com/DanielGoldfarb/pydjlx/commit/3f1ab656832f0857b3d5c82d284a9bb1281d88c8)
* [**Step6 :** Execute command with arguments](https://github.com/DanielGoldfarb/pydjlx/commit/a4551da3471b51d2436b13f159da2391b1b7d6d3)
* [**Step7a:** Create Side-bar widget with buttons](https://github.com/DanielGoldfarb/pydjlx/commit/77e88e129bdb65e7c412ec984506eae4e47fab10)
* [**Step7b:** Style side-bar widget](https://github.com/DanielGoldfarb/pydjlx/commit/d34e79b34058b2983af423542258435ec5dd56b1)
* [**Step7c:** Add event listeners on buttons](https://github.com/DanielGoldfarb/pydjlx/commit/54b5571b22cbecc3b38e5d6d7be404907a7a1656)
