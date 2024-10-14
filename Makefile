# Define variables
USERNAME=admin
VPS_IP=103.217.144.72
PROJECT_DIR=/home/$(USERNAME)/hkn-fe
APP_NAME=hkn-fe

# Pull updates from Git and run the app in the background
initial-deploy:
	ssh $(USERNAME)@$(VPS_IP) 'cd $(PROJECT_DIR) && git pull origin main && npm install && npm run build && pm2 start npm --name "$(APP_NAME)" -- run dev'

# Stop the running app, pull updates, and restart the app in the background
deploy:
	ssh $(USERNAME)@$(VPS_IP) 'pm2 stop $(APP_NAME) && cd $(PROJECT_DIR) && git pull origin main && npm install && npm run build && pm2 restart $(APP_NAME) --update-env'

# Stop the running app
stop:
	ssh $(USERNAME)@$(VPS_IP) 'pm2 stop $(APP_NAME)'

# Start the app in the background
start:
	ssh $(USERNAME)@$(VPS_IP) 'cd $(PROJECT_DIR) && pm2 start npm --name "$(APP_NAME)" -- run dev'

# Restart the app in the background
restart:
	ssh $(USERNAME)@$(VPS_IP) 'pm2 restart $(APP_NAME)'

# Check the status of the app
status:
	ssh $(USERNAME)@$(VPS_IP) 'pm2 status $(APP_NAME)'

