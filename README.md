# Requirements

Have redshift installed.

# Setup instructions

```sh
# Make sure nodejs is installed, and npm
# if no yarn
sudo npm i -g yarn
# if no pm2
yarn global add pm2

pm2 start redshiftOnWakeup.js
pm2 startup
```
