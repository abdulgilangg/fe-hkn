# Define variables
USERNAME=admin
VPS_IP=103.217.144.72
PROJECT_DIR=/home/$(USERNAME)/hkn-fe
APP_NAME=hkn-fe # Name for the process

# Pull updates from Git and run the app in the background
deploy:
	@echo "Deploying the app..."
	ssh $(USERNAME)@$(VPS_IP) 'cd $(PROJECT_DIR) && git pull origin main && npm install && pm2 start npm --name "$(APP_NAME)" -- run dev && pm2 logs $(APP_NAME) --lines 10'

# Stop the running app, pull updates, and restart the app in the background
update:
	@echo "Updating the app..."
	ssh $(USERNAME)@$(VPS_IP) 'pm2 stop $(APP_NAME) && cd $(PROJECT_DIR) && git pull origin main && npm install && pm2 restart $(APP_NAME) --update-env && pm2 logs $(APP_NAME) --lines 10'

# Stop the running app
stop:
	@echo "Stopping the app..."
	ssh $(USERNAME)@$(VPS_IP) 'pm2 stop $(APP_NAME) && pm2 logs $(APP_NAME) --lines 10'

# Start the app in the background
start:
	@echo "Starting the app..."
	ssh $(USERNAME)@$(VPS_IP) 'cd $(PROJECT_DIR) && pm2 start npm --name "$(APP_NAME)" -- run dev && pm2 logs $(APP_NAME) --lines 10'

# Restart the app in the background
restart:
	@echo "Restarting the app..."
	ssh $(USERNAME)@$(VPS_IP) 'pm2 restart $(APP_NAME) && pm2 logs $(APP_NAME) --lines 10'

# Check the status of the app
status:
	@echo "Checking the status of the app..."
	ssh $(USERNAME)@$(VPS_IP) 'pm2 status $(APP_NAME)'
