check:
	date
	@echo "ran check SUCCESS"

start-dev:
	docker-compose up -d
	@echo "dev server started SUCCESS"
	@echo "open browser at localhost:3000"

stop-dev:
	docker-compose down
	@echo "stop dev server SUCCESS"

start-prod:
	docker-compose -f docker-compose-prod.yml up -d
	@echo "prod server started SUCCESS"
	@echo "open browser at localhost:80"

stop-prod:
	docker-compose -f docker-compose-prod.yml down
	@echo "stop prod server SUCCESS"