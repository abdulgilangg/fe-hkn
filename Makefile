#how to use :

#command to run the app
#what happen :
# 1. close the port 3000 incase this port already used by another app before.
# 2. start the dev server for the app
run-fe :
	@nohup npm run dev &

#command to check the nohup output (log output)
check-output :
	cat nohup.out

#command to check the PID of running app
check-pid :
	ps aux | grep 'npm run dev'

check-port :
	netstat -nlp

#command to update the source code from the repository (origin develop branch)
pull-repo :
	git pull origin develop

#command to free the 3000 port.
free-port :
	fuser -k 3000/tcp
#note :
# before run the app make sure to stop the running app incase there are app already running exist
# here is the steps :
# 1. kill the running process
# 2. free the port
# 3. pull the latest changes from repo
# 4. re-run the app