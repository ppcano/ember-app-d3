
serve:
	
	rm -rf dist tmp
	RUNNING_TEST=false \
	PORT=9000 \
		node server/server.js

test:
	
	rm -rf dist tmp
	RUNNING_TEST=true broccoli serve --port 9000 

build:
	
	rm -rf dist tmp
	broccoli build dist

.PHONY: server build
