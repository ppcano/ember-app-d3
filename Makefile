
serve:
	
	rm -rf dist tmp
	RUNNING_TEST=false \
	PORT=9000 \
		node server/server.js

unit:
	
	rm -rf dist tmp
	RUNNING_TEST=true TEST_TYPE=unit broccoli serve --port 9000 

integration:
	
	rm -rf dist tmp
	RUNNING_TEST=true TEST_TYPE=integration broccoli serve --port 9000 

build:
	
	rm -rf dist tmp
	broccoli build dist

.PHONY: server build
