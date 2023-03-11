export SECRET_KEY=abc123
export DEBUG=True

docker-compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10 
docker exec project1-api-1  python /src/manage.py makemigrations 
docker exec project1-api-1  python /src/manage.py migrate