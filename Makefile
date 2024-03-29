.EXPORT_ALL_VARIABLES:
AWS_PROFILE = honda-info-prod-s3

check:
	date
	@echo "ran check SUCCESS"

install-deps:
	npm install
	@echo "installed dependencies SUCCESS"

start-dev:
	docker-compose up -d
	@echo "dev server started SUCCESS"
	@echo "open browser at localhost:3000"

stop-dev:
	docker-compose down
	@echo "stop dev server SUCCESS"

start-tests:
	npm run test

start-prod:
	docker-compose -f docker-compose-prod.yml up -d
	@echo "prod server started SUCCESS"
	@echo "open browser at localhost:80"

stop-prod:
	docker-compose -f docker-compose-prod.yml down
	@echo "stop prod server SUCCESS"

# docker related commands
# TODO: pass dynamic version number
do-build-dev:
	docker build -t rodiwa/honda-info:1.2 .
	@echo "create docker dev image SUCCESS"

# docker scans images for vulnerabilities using snyk
do-scan-image:
	docker scan rodiwa/honda-info:1.2

# push docker image to repo
do-image-push:
	docker push rodiwa/honda-info:1.2

# commit docker container
# TODO: pass container ID, version
do-container-commit:
	docker container commit 09bcbcf33185 rodiwa/honda-info:1.2

# static files related
# create static files
run-build:
	npm run build
	@echo "Created build folder"

# host static files in build folder
host-build:
	@echo "Hosting from build folder..."
	npx http-server ./build

# remove build folder
remove-build:
	rm -rf ./build/
	@echo "Deleted ./build folder"

# delete and recreate build folder
clean-build:
	make remove-build && make run-build

# [hack] copy build folder to s3 prod
# remove old s3 content + clean build + copy
deploy-to-prod-hack:
	make clean-build
	aws s3 rm s3://buymyhonda.info/ --recursive
	aws s3 cp build/ s3://buymyhonda.info/ --recursive

# info to show on screen
info:
	@echo
	@echo "Make scripts you can use with this project"
	@echo "-----------------------------------------"
	@echo "Install deps - 'make install-deps'"
	@echo "Start Dev - 'make start-dev'"
	@echo "Stop Dev - 'make stop-dev'"
	@echo "Start Tests - 'make start-tests'"
	@echo "Start Prod - 'make start-prod'"
	@echo "Stop Prod - 'make stop-prod'"
	@echo "Show available commands - 'make info'"
	@echo
	@echo "Docker commands"
	@echo "-----------------"
	@echo "Build new image - 'make do-build-dev'"
	@echo "Scan docker image - 'make do-scan-image'"
	@echo "Push docker image - 'make do-image-push'"
	@echo "Commit docker container - 'make do-container-commit'"
	@echo
	@echo "Static files"
	@echo "--------------"
	@echo "Run build to generate static files" - 'make run-build'
	@echo "Host build files" - 'make host-build'
	@echo "Remove build folder" - 'make remove-build'
	@echo "Clean build folder" - 'make clean-build'
	@echo
